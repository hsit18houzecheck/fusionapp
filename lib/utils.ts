import { TRUSTPILOT_REVIEW_LINK } from "@/common/constants";
import { Button } from "@/common/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(input?: string | null): string {
  const name = (input || "Customer").trim();
  if (!name) return "C";
  // Split by spaces, take first and last alphanumeric chunks for initials
  const parts = name.split(/\s+/).filter(Boolean);
  const first = parts[0] || "C";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  const initials = (last ? first[0] + last : first.slice(0, 2)).toUpperCase();
  return initials || "C";
}

export function cleanUrl(url: string) {
  return url?.replace(/[`\s]/g, "").trim();
}

export function isUrl(value: string) {
  return value.startsWith("http") || value.startsWith("/");
}

export function filterByEnvironment<T>(data: T, env: string): T | null {
  if (Array.isArray(data)) {
    return data
      .map((item) => filterByEnvironment(item, env))
      .filter(Boolean) as T;
  } else if (typeof data === "object" && data !== null) {
    // Check if this object is environment-gated
    if (
      Object.prototype.hasOwnProperty.call(data, env) &&
      (data as any)[env] === false
    ) {
      return null;
    }

    // Create a copy and filter nested objects
    const filtered: Record<string, any> = {};
    for (const key in data) {
      const value = (data as Record<string, any>)[key];
      const result = filterByEnvironment(value, env);
      if (result !== null && result !== undefined) {
        filtered[key] = result;
      }
    }

    // If no keys left, drop this object
    if (Object.keys(filtered).length === 0) return null;

    // If environment toggles exist but this one is missing, drop it
    const hasAnyEnvFlag =
      "develop" in (data as Record<string, any>) ||
      "staging" in (data as Record<string, any>) ||
      "production" in (data as Record<string, any>);
    if (hasAnyEnvFlag && !(env in (data as Record<string, any>))) return null;

    return filtered as T;
  } else {
    return data;
  }
}

export const getTrustpilotReviewLink = (id: string) =>
  `${TRUSTPILOT_REVIEW_LINK}${id}`;

/**
 * Replace placeholders in a template string with provided values.
 * Placeholders should be in the format {key}.
 * @example
 * replacePlaceholders("We've completed {count} surveys in {city}", { count: 42, city: "London" })
 * // Returns: "We've completed 42 surveys in London"
 */
export function replacePlaceholders(
  template: string,
  values: Record<string, string | number>
): string {
  return (Object.entries(values) || []).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, String(value)),
    template
  );
}

/**
 * Ensure a Mapbox image is registered under a given id using a PNG only.
 * Returns true if the image was added successfully.
 */
export async function ensureMapImage(
  map: any,
  imageId: string,
  opts: {
    pngPath: string;
    pixelRatio?: number;
  }
): Promise<boolean> {
  const { pngPath, pixelRatio = 2 } = opts || {};
  try {
    if (!pngPath) return false;
    if (map.hasImage(imageId)) {
      map.removeImage(imageId);
    }
    const pngImage: HTMLImageElement | ImageBitmap | undefined =
      await new Promise((resolve) => {
        map.loadImage(pngPath, (err: unknown, img: any) =>
          resolve(err ? undefined : img)
        );
      });
    if (!pngImage) return false;
    map.addImage(imageId, pngImage, { pixelRatio });
    return true;
  } catch {
    // swallow; caller can decide what to do
  }
  return false;
}

export function handleActionUrl(url?: string): boolean {
  if (!url?.startsWith("#") || typeof window === "undefined") return false;

  const hash = url.substring(1);
  if (!hash) return false;

  const element = document.getElementById(hash);

  if (element) return false;

  window.dispatchEvent(new CustomEvent(hash));
  return true;
}

export const handleCTAClick = (e: React.MouseEvent, button: Button) => {
  if (handleActionUrl(button.url)) {
    e.preventDefault();
  } else if (button.onClick) {
    e.preventDefault();
    button.onClick();
  }
};
