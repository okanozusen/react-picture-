import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx] || {}; 
  const total = photos.length;

  function goForward() {
    if (currCardIdx < total - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  function goBackward() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  if (!currCard.src) {
    return <h1>No photos available</h1>;
  }
  
 

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx > 0 && (
          <i
            className="bi bi-arrow-left-circle"
            onClick={goBackward}
            data-testid="left-arrow"
          />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx < total - 1 && (
          <i
            className="bi bi-arrow-right-circle"
            onClick={goForward}
            data-testid="right-arrow"
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;
