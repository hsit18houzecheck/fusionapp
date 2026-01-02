import { useCallback, useEffect, useRef, useState } from "react";

export interface UseFullscreenOptions {
  /**
   * Callback fired when fullscreen state changes
   */
  onFullscreenChange?: (isFullscreen: boolean) => void;
  
  /**
   * Callback fired when fullscreen request fails
   */
  onError?: (error: Error) => void;
}

export interface UseFullscreenReturn {
  /**
   * Ref to attach to the element that should be fullscreen
   */
  ref: React.RefObject<HTMLDivElement | null>;
  
  /**
   * Current fullscreen state
   */
  isFullscreen: boolean;
  
  /**
   * Toggle fullscreen mode
   */
  toggleFullscreen: () => Promise<void>;
  
  /**
   * Enter fullscreen mode
   */
  enterFullscreen: () => Promise<void>;
  
  /**
   * Exit fullscreen mode
   */
  exitFullscreen: () => Promise<void>;
}

/**
 * Custom hook to manage fullscreen functionality for an element
 * 
 * @example
 * ```tsx
 * const { ref, isFullscreen, toggleFullscreen } = useFullscreen({
 *   onFullscreenChange: (isFullscreen) => console.log('Fullscreen:', isFullscreen),
 *   onError: (error) => console.error('Fullscreen error:', error)
 * });
 * 
 * return (
 *   <div ref={ref}>
 *     <button onClick={toggleFullscreen}>
 *       {isFullscreen ? 'Exit' : 'Enter'} Fullscreen
 *     </button>
 *   </div>
 * );
 * ```
 */
export function useFullscreen(
  options: UseFullscreenOptions = {}
): UseFullscreenReturn {
  const { onFullscreenChange, onError } = options;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const fullscreenState = !!document.fullscreenElement;
      setIsFullscreen(fullscreenState);
      onFullscreenChange?.(fullscreenState);
    };

    // Listen to all fullscreen change events for cross-browser compatibility
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, [onFullscreenChange]);

  /**
   * Enter fullscreen mode
   */
  const enterFullscreen = useCallback(async () => {
    if (!containerRef.current) {
      const error = new Error("Container ref is not available");
      onError?.(error);
      return;
    }

    try {
      const element = containerRef.current as any;
      
      // Try different fullscreen methods for cross-browser compatibility
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        await element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        await element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        await element.msRequestFullscreen();
      } else {
        throw new Error("Fullscreen API is not supported");
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error("Fullscreen error:", error);
      onError?.(error);
    }
  }, [onError]);

  /**
   * Exit fullscreen mode
   */
  const exitFullscreen = useCallback(async () => {
    try {
      const doc = document as any;
      
      // Try different exit fullscreen methods for cross-browser compatibility
      if (doc.exitFullscreen) {
        await doc.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      } else {
        throw new Error("Fullscreen API is not supported");
      }
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      console.error("Fullscreen error:", error);
      onError?.(error);
    }
  }, [onError]);

  /**
   * Toggle fullscreen mode
   */
  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await enterFullscreen();
    } else {
      await exitFullscreen();
    }
  }, [enterFullscreen, exitFullscreen]);

  return {
    ref: containerRef,
    isFullscreen,
    toggleFullscreen,
    enterFullscreen,
    exitFullscreen,
  };
}