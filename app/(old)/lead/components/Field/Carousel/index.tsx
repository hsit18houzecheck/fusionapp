import { useState, useEffect } from "react";
import type { TouchEvent } from "react";
import "./carousel.css";
import type { CarouselProps } from "../types";

function Carousel(props: CarouselProps) {
  const { children, show } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(
    Array.isArray(children) ? children.length : 0
  );
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(Array.isArray(children) ? children.length : 1);
  }, [children]);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={prev}
            className="left-arrow text-primary-lead-old-600 drop-shadow"
          >
            &lt;
          </button>
        )}

        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex < length - 1 && (
          <button
            type="button"
            onClick={next}
            className="right-arrow text-primary-lead-old-600 drop-shadow"
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default Carousel;
