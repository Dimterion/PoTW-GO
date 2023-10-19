import React from "react";
import { useState } from "react";
import "./creditsScreenSlider.css";

type CreditsScreenSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

function CreditsScreenSlider({ images }: CreditsScreenSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPreviousSlide() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  function showNextSlide() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <article
      aria-label="Image slider"
      className="creditsScreenSlider-container"
    >
      <a
        href="#after-image-slider-controls"
        className="creditsScreenSlider-skipLink"
      >
        Skip image slider controls
      </a>
      <div className="creditsScreenSlider-slides">
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="creditsScreenSlider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        aria-label="View previous image"
        className="creditsScreenSlider-btn"
        style={{ left: 0 }}
        onClick={showPreviousSlide}
      >
        <div aria-hidden>❮</div>
      </button>
      <button
        aria-label="View next image"
        className="creditsScreenSlider-btn"
        style={{ right: 0 }}
        onClick={showNextSlide}
      >
        <div aria-hidden>❯</div>
      </button>
      <div className="creditsScreenSlider-dotButtons">
        {images.map((_, index) => (
          <button
            key={index}
            aria-label={`View image ${index + 1}`}
            className="creditsScreenSlider-dotBtn"
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <div aria-hidden style={{ background: "white" }}></div>
            ) : (
              <div aria-hidden style={{ background: "black" }}></div>
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </article>
  );
}

export default CreditsScreenSlider;
