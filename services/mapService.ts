import axios from "axios";
import type { Geometry, BBox, Position } from "geojson";

type MapboxGeocodingFeature = {
  text: string;
  geometry: Geometry;
  bbox?: BBox;
  center?: Position;
};

type MapboxGeocodingResponse = {
  features: Array<MapboxGeocodingFeature>;
};

export async function searchPostcode(
  query: string
): Promise<MapboxGeocodingResponse["features"][0] | null> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  if (!token) {
    throw new Error("Missing NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN");
  }

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    query
  )}.json`;

  try {
    const response = await axios.get<MapboxGeocodingResponse>(url, {
      params: {
        country: "GB",
        types: "postcode",
        limit: 1,
        access_token: token,
      },
    });

    return response.data?.features?.[0] || null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Mapbox geocoding API error: ${error.message}${error.response ? ` (${error.response.status})` : ""}`
      );
    }
    throw error;
  }
}

