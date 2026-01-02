
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
    const pngImage: HTMLImageElement | ImageBitmap | undefined = await new Promise((resolve) => {
      map.loadImage(pngPath, (err: unknown, img: any) => resolve(err ? undefined : img));
    });
    if (!pngImage) return false;
    map.addImage(imageId, pngImage, { pixelRatio });
    return true;
  } catch {
    // swallow; caller can decide what to do
  }
  return false;
}
