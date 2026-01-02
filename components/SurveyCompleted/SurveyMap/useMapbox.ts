import { useEffect, useRef, useState, type RefObject } from "react";
import mapboxgl from "mapbox-gl";

type EnsureMapImageFunction = (
  map: any,
  imageId: string,
  opts: {
    pngPath: string;
    pixelRatio?: number;
  }
) => Promise<boolean>;

export type PopupContentData = {
  postalCode: string;
  city: string;
  jobData: Array<{ booking_date: string; job_type: string }>;
  onClose?: () => void;
};

type UseMapboxOptions = {
  style?: string;
  center?: [number, number];
  zoom?: number;
  attributionControl?: boolean;
  logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onLoad?: (map: mapboxgl.Map) => void;
  onError?: (error: Error) => void;
  // SurveyMap specific setup options
  setupSurveyMap?: {
    postcodeSamples: any;
    ensureMapImage: EnsureMapImageFunction;
    iconPath?: string;
    renderPopupContent?: (data: PopupContentData) => HTMLElement;
  };
};

type UseMapboxReturn = {
  mapContainerRef: RefObject<HTMLDivElement | null>;
  map: mapboxgl.Map | null;
  error: string | null;
  isInitialized: boolean;
};

function setupSurveyMapLayers(
  map: mapboxgl.Map,
  postcodeSamples: any,
  ensureMapImage: EnsureMapImageFunction,
  iconPath = "/assets/images/hc-icon.png",
  renderPopupContent?: (data: PopupContentData) => HTMLElement
) {
  // Add clustered source (docs example style uses point_count properties)
  map.addSource("uk-postcodes", {
    type: "geojson",
    data: (postcodeSamples || { type: "FeatureCollection", features: [] }) as any,
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50,
  });

  // Search highlight source/layer (polygon-based, initially empty)
  map.addSource("postcode-highlight", {
    type: "geojson",
    data: { type: "FeatureCollection", features: [] } as any,
  });

  // Polygon fill layer
  map.addLayer({
    id: "postcode-highlight-fill",
    type: "fill",
    source: "postcode-highlight",
    layout: { visibility: "none" },
    paint: {
      "fill-color": "#25d366",
      "fill-opacity": 0.3,
    },
  });

  // Polygon outline layer
  map.addLayer({
    id: "postcode-highlight-outline",
    type: "line",
    source: "postcode-highlight",
    layout: { visibility: "none" },
    paint: {
      "line-color": "#25d366",
      "line-width": 2,
    },
  });

  // Cluster halo (soft outer glow to mimic design)
  map.addLayer({
    id: "cluster-halo",
    type: "circle",
    source: "uk-postcodes",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "#F4EFE4", // warm cream halo
      "circle-opacity": 0.7,
      "circle-radius": [
        "step",
        ["get", "point_count"],
        28,
        10,
        36,
        25,
        44,
        50,
        56,
      ],
    },
  });

  // Cluster core (solid cream with subtle stroke)
  map.addLayer({
    id: "clusters",
    type: "circle",
    source: "uk-postcodes",
    filter: ["has", "point_count"],
    paint: {
      "circle-color": "#FFF6E6", // inner cream
      "circle-radius": [
        "step",
        ["get", "point_count"],
        18,
        10,
        22,
        25,
        26,
        50,
        30,
      ],
      "circle-stroke-color": "#E8DED0",
      "circle-stroke-width": 2,
    },
  });

  // Cluster labels (dark text centered)
  map.addLayer({
    id: "cluster-count",
    type: "symbol",
    source: "uk-postcodes",
    filter: ["has", "point_count"],
    layout: {
      "text-field": ["get", "point_count_abbreviated"],
      "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      "text-size": 14,
    },
    paint: {
      "text-color": "#22221F",
    },
  });

  // Custom icon on unclustered points using util helper (PNG only)
  (async () => {
    const ok = await ensureMapImage(map, "hc-icon", {
      pngPath: iconPath,
      pixelRatio: 2,
    });
    if (ok && !map.getLayer("unclustered-icon")) {
      map.addLayer({
        id: "unclustered-icon",
        type: "symbol",
        source: "uk-postcodes",
        filter: ["!", ["has", "point_count"]],
        layout: {
          "icon-image": "hc-icon",
          "icon-size": 0.7,
          "icon-allow-overlap": true,
        },
      });
    }
  })();

  // Create a popup instance for unclustered points
  const popup = new mapboxgl.Popup({
    closeButton: false, // We use custom close button in the component
    closeOnClick: false,
    maxWidth: "400px",
    className: "mapbox-marker-popup",
  });

  // Show tooltip on unclustered marker click
  map.on("click", "unclustered-icon", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["unclustered-icon"],
    });

    if (!features.length) return;

    const feature = features[0];
    const coordinates = (feature.geometry as any).coordinates.slice();
    const properties = feature.properties;

    // Parse the data array if it's a string (from GeoJSON)
    let jobData: Array<{ booking_date: string; job_type: string }> = [];
    try {
      jobData = properties?.data ? JSON.parse(properties.data) : [];
    } catch (e) {
      console.error("Error parsing job data:", e);
    }

    // Ensure coordinates are valid
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    const postalCode = properties?.postalCode || "Unknown";
    const city = properties?.city || "";

    // Use the callback to render popup content if provided
    if (!renderPopupContent) {
      console.error("renderPopupContent callback is required but was not provided to useMapbox hook");
      return;
    }

    const popupNode = renderPopupContent({
      postalCode,
      city,
      jobData,
      onClose: () => popup.remove() // Pass close handler
    });

    // Set the popup with the content
    popup.setLngLat(coordinates).setDOMContent(popupNode).addTo(map);
  });

  // Zoom into cluster on click
  map.on("click", "clusters", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["clusters"],
    });
    const clusterId = features[0]?.properties?.cluster_id;
    const source = map.getSource("uk-postcodes") as mapboxgl.GeoJSONSource;
    if (clusterId && source && source.getClusterExpansionZoom) {
      source.getClusterExpansionZoom(clusterId, (err, zoomLevel) => {
        if (err) return;
        if (features[0]?.geometry?.type === "Point") {
          const [lng, lat] = (features[0].geometry as any)
            .coordinates as [number, number];
          if (typeof zoomLevel === "number") {
            map.easeTo({ center: [lng, lat], zoom: zoomLevel });
          }
        }
      });
    }
  });

  // Pointer cursor feedback
  map.on("mouseenter", "clusters", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "clusters", () => {
    map.getCanvas().style.cursor = "";
  });
  map.on("mouseenter", "unclustered-point", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "unclustered-point", () => {
    map.getCanvas().style.cursor = "";
  });
  // Also apply pointer feedback to the icon layer
  map.on("mouseenter", "unclustered-icon", () => {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "unclustered-icon", () => {
    map.getCanvas().style.cursor = "";
  });
}

export function useMapbox({
  style = "mapbox://styles/mapbox/streets-v12",
  center = [0, 0],
  zoom = 1,
  attributionControl = false,
  logoPosition = "bottom-right",
  onLoad,
  onError,
  setupSurveyMap,
}: UseMapboxOptions): UseMapboxReturn {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const initializedRef = useRef(false);
  const onLoadRef = useRef(onLoad);
  const onErrorRef = useRef(onError);
  const setupSurveyMapRef = useRef(setupSurveyMap);
  const [error, setError] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Keep callbacks in refs to avoid re-initializing the map
  useEffect(() => {
    onLoadRef.current = onLoad;
    onErrorRef.current = onError;
    setupSurveyMapRef.current = setupSurveyMap;
  }, [onLoad, onError, setupSurveyMap]);

  // Update source data when postcodeSamples changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !isInitialized || !setupSurveyMap?.postcodeSamples) return;

    const source = map.getSource("uk-postcodes") as mapboxgl.GeoJSONSource;
    if (source) {
      source.setData(setupSurveyMap.postcodeSamples);
    }
  }, [isInitialized, setupSurveyMap?.postcodeSamples]);

  // Initialize map only once when container is available
  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || initializedRef.current) return;

    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!token) {
      const err = new Error("Missing NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN");
      setError("Failed to initialize Mapbox map: Missing access token");
      onErrorRef.current?.(err);
      return;
    }

    try {
      mapboxgl.accessToken = token;
      const map = new mapboxgl.Map({
        container,
        style,
        center,
        zoom,
        attributionControl,
        logoPosition,
        cooperativeGestures: true,
      });

      mapRef.current = map;
      initializedRef.current = true;

      // Add compact attribution if not disabled
      if (attributionControl) {
        map.addControl(
          new mapboxgl.AttributionControl({ compact: true }),
          "bottom-left"
        );
      }

      // Handle map load event
      map.on("load", () => {
        setIsInitialized(true);

        // Setup SurveyMap layers if configured
        if (setupSurveyMapRef.current) {
          setupSurveyMapLayers(
            map,
            setupSurveyMapRef.current.postcodeSamples,
            setupSurveyMapRef.current.ensureMapImage,
            setupSurveyMapRef.current.iconPath,
            setupSurveyMapRef.current.renderPopupContent
          );
        }

        onLoadRef.current?.(map);
      });

      // Handle map errors
      map.on("error", (e) => {
        const err = new Error(`Mapbox error: ${e.error?.message || "Unknown error"}`);
        setError(`Failed to initialize Mapbox map: ${err.message}`);
        onErrorRef.current?.(err);
      });

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
          mapRef.current = null;
        }
        initializedRef.current = false;
        setIsInitialized(false);
      };
    } catch (err) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      setError(`Failed to initialize Mapbox map: ${error.message}`);
      initializedRef.current = false;
      onErrorRef.current?.(error);
    }
    // Only initialize once - ignore style/center/zoom changes after initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    mapContainerRef,
    map: mapRef.current,
    error,
    isInitialized,
  };
}

