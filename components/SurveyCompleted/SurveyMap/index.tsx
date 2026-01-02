"use client";

import "mapbox-gl/dist/mapbox-gl.css";

import { useCallback, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { Check, Expand, Shrink } from "lucide-react";
import { createRoot } from "react-dom/client";
import "./map.css";
import { cn } from "@/lib/utils";
import SearchBar from "./SearchBar";
import PostcodeInfoBox from "./PostcodeInfoBox";
import MapLayerToggle from "./MapLayerToggle";
import MapLoadingOverlay from "./MapLoadingOverlay";
import { PostcodeInfo, SurveyMapProps } from "../types";
import { ensureMapImage } from "./mapUtils";
import { searchPostcode } from "@/services/mapService";
import {
  useMapbox,
  type PopupContentData,
} from "@/components/SurveyCompleted/SurveyMap/useMapbox";
import { useFullscreen } from "@/hooks/useFullscreen";
import MarkerPopupContent from "./MarkerPopupContent";

export default function SurveyMap({
  mapHeading,
  mapSearchPlaceholder,
  mapLayerLabels,
  mapPostcodeInfoBox,
  mapNotificationBanner,
  mapPopup,
  className,
  center = [-3.5, 54.5],
  zoom = 5,
  mapStyle = "mapbox://styles/mapbox/streets-v12",
  ...rest
}: SurveyMapProps) {
  const [postcodeInfo, setPostcodeInfo] = useState<PostcodeInfo | null>(null);
  const [postcodeSamples, setPostcodeSamples] = useState<any>(null);
  const { ref: containerRef, isFullscreen, toggleFullscreen } = useFullscreen();

  useEffect(() => {
    import("./UK_POSTCODE_SAMPLES.json").then((data) => {
      setPostcodeSamples(data.default || data);
    });
  }, []);

  // Create a callback to render popup content using createRoot
  const renderPopupContent = useCallback(
    (data: PopupContentData) => {
      const container = document.createElement("div");
      const root = createRoot(container);

      // Render synchronously to ensure content is ready before returning
      root.render(
        <MarkerPopupContent
          postalCode={data.postalCode}
          city={data.city}
          jobData={data.jobData}
          onClose={data.onClose}
          content={mapPopup}
        />
      );

      return container;
    },
    [mapPopup]
  );

  const { map, error, mapContainerRef, isInitialized } = useMapbox({
    style: mapStyle,
    center,
    zoom,
    attributionControl: false,
    logoPosition: "bottom-right",
    setupSurveyMap: {
      postcodeSamples: postcodeSamples,
      ensureMapImage,
      iconPath: "/assets/images/hc-icon.png",
      renderPopupContent,
    },
  });

  // Handle layer toggle changes
  const handleLayerToggle = useCallback(
    (layer: "today" | "coverage" | "past", enabled: boolean) => {
      if (!map) return;

      const visibility = enabled ? "visible" : "none";

      try {
        switch (layer) {
          case "today":
            //TODO: implement live survey happening later
            break;
          case "coverage":
            //TODO: implement survey coverage area ploygons later
            break;
          case "past":
            // Control cluster layers
            if (map.getLayer("clusters")) {
              map.setLayoutProperty("clusters", "visibility", visibility);
            }
            if (map.getLayer("cluster-halo")) {
              map.setLayoutProperty("cluster-halo", "visibility", visibility);
            }
            if (map.getLayer("cluster-count")) {
              map.setLayoutProperty("cluster-count", "visibility", visibility);
            }
            if (map.getLayer("unclustered-icon")) {
              map.setLayoutProperty(
                "unclustered-icon",
                "visibility",
                visibility
              );
            }
            break;
        }
      } catch (err) {
        console.error("Error toggling layer:", err);
      }
    },
    [map]
  );

  // Callback function to handle search from SearchBar component
  const handleSearchPostcode = useCallback(
    async (query: string) => {
      if (!map) return;

      try {
        const feature = await searchPostcode(query);

        if (feature && feature.geometry) {
          const highlightSource = map.getSource(
            "postcode-highlight"
          ) as mapboxgl.GeoJSONSource;

          // Update highlight source with the postcode geometry
          highlightSource.setData({
            type: "FeatureCollection",
            features: [feature],
          } as any);

          // Show highlight layers
          map.setLayoutProperty(
            "postcode-highlight-fill",
            "visibility",
            "visible"
          );
          map.setLayoutProperty(
            "postcode-highlight-outline",
            "visibility",
            "visible"
          );

          // Extract postcode from the search result
          const postcodeText = feature.text || query.toUpperCase();

          // Get survey count from our sample data or generate random
          const matchingSample = (postcodeSamples as any)?.features?.find(
            (f: any) =>
              f.properties.postalCode === postcodeText.replace(/\s+/g, "")
          );
          const surveyCount =
            matchingSample?.properties?.count ||
            Math.floor(Math.random() * 50) + 20;

          // Set postcode info to show the info box
          setPostcodeInfo({
            postcode: postcodeText,
            surveyCount,
            surveyorCount: 4,
            nextAvailableSlot: "in 3 days",
            rating: 5,
          });

          // Fit map to the postcode bounds
          if (feature.bbox) {
            map.fitBounds(feature.bbox as [number, number, number, number], {
              padding: 50,
              maxZoom: 14,
            });
          } else if (feature.center) {
            map.flyTo({
              center: feature.center as [number, number],
              zoom: 13,
            });
          }
        }
      } catch (err) {
        console.error("Search error:", err);
        // Hide highlight on error
        if (map) {
          map.setLayoutProperty(
            "postcode-highlight-fill",
            "visibility",
            "none"
          );
          map.setLayoutProperty(
            "postcode-highlight-outline",
            "visibility",
            "none"
          );
        }
        // Clear postcode info on error
        setPostcodeInfo(null);
      }
    },
    [map]
  );

  return (
    <div
      ref={containerRef}
      {...rest}
      className={cn(
        "relative w-full",
        "overflow-hidden",
        "bg-white",
        error && "bg-grey-100",
        {
          "fixed inset-0 z-9999 w-screen h-screen rounded-none": isFullscreen,
          "rounded-2xl lg:flex-1 h-177 md:h-185 lg:h-185 min-h-80 shrink-0":
            !isFullscreen,
        },
        className
      )}
    >
      <div ref={mapContainerRef} className="h-full w-full" id="map-container" />

      {/* Loading Overlay */}
      {(!isInitialized || !postcodeSamples) && !error && <MapLoadingOverlay />}

      {/* Section Heading */}
      {/* {mapHeading && (
        <h2
          className={cn(
            "absolute top-8 left-1/2 -translate-x-1/2 z-10",
            "bg-yellow-900/80 backdrop-blur-[2px]",
            "px-10 py-5 rounded-2xl",
            "font-freight font-medium text-yellow-500 lining-nums proportional-nums",
            "text-[2rem] leading-9 tracking-normal",
            "whitespace-nowrap text-center",
            "hidden md:block"
          )}
        >
          {mapHeading.heading1}
          {mapHeading.heading2}
        </h2>
      )} */}
      {/* Postcode info box - shown only when search is performed */}
      {postcodeInfo && (
        <PostcodeInfoBox
          postcode={postcodeInfo.postcode}
          surveyCount={postcodeInfo.surveyCount}
          surveyorCount={postcodeInfo.surveyorCount}
          nextAvailableSlot={postcodeInfo.nextAvailableSlot}
          rating={postcodeInfo.rating}
          mapPostcodeInfoBox={mapPostcodeInfoBox}
          onClose={() => setPostcodeInfo(null)}
        />
      )}
      {/* TODO: commented for demo */}
      {/* <SearchBar
        onSearch={handleSearchPostcode}
        mapSearchPlaceholder={mapSearchPlaceholder}
      /> */}

      {/* TODO: commented for demo */}
      {/* <div className="absolute left-1/2 top-20.5 -translate-x-1/2 z-1 pointer-events-none">
        <div className="flex items-center gap-2 w-78.25 md:w-auto max-w-[calc(100vw-2rem)] rounded-[0.25rem] bg-success-100 text-success-500 px-3 py-1.5 shadow-sm">
          <Check className="w-4 h-4" strokeWidth={4} />
          <span className="text-xs font-semibold whitespace-nowrap uppercase overflow-hidden">
            {mapNotificationBanner}
          </span>
        </div>
      </div> */}

      {/* TODO: commented for demo */}
      {/* Map layer toggles */}
      {/* <MapLayerToggle
        onToggleChange={handleLayerToggle}
        mapLayerLabels={mapLayerLabels}
      /> */}

      {/* Fullscreen button */}
      <button
        type="button"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        className="absolute right-4 bottom-4 p-2.5 z-2 grid place-items-center size-10 md:size-12.5 rounded-md md:rounded-2xl bg-yellow-900/80 backdrop-blur-sm text-yellow-100 hover:bg-yellow-900 transition-colors shadow-lg"
      >
        {isFullscreen ? (
          <Shrink className="w-5 md:w-6.25 h-5 md:h-6.25" />
        ) : (
          <Expand className="w-5 md:w-6.25 h-5 md:h-6.25" />
        )}
      </button>
    </div>
  );
}
