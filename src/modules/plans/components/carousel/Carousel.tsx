import { useState } from "react";
import CardPlan from "../card-plan/Card-plan";

interface CarouselProps {
  data: any[];
  selectedPlan: string;
}

const Carousel = ({ data, selectedPlan }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = data.length;
  
    const handlePrev = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };
  
    const handleNext = () => {
      setCurrentIndex((prev) => (prev < total - 1 ? prev + 1 : prev));
    };

  return (
    <div className="plans__carousel">
      <div
        className="plans__carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((plan, index) => (
          <div className="plans__carousel-item" key={index}>
            <CardPlan data={plan} type={selectedPlan} />
          </div>
        ))}
      </div>

      <div className="plans__carousel-nav">
        <button
          className="plans__carousel-button"
          onClick={handlePrev}
            disabled={currentIndex === 0}
        >
          <img src="./icon/icon-arrow.svg" alt="Anterior" />
        </button>
        <span className="plans__carousel-indicator">
          {currentIndex + 1} / {total}
        </span>
        <button
          className="plans__carousel-button"
          onClick={handleNext}
          disabled={currentIndex === total - 1}
        >
          <img
            src="./icon/icon-arrow.svg"
            alt="Siguiente"
            className="plans__carousel-button-mirror"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
