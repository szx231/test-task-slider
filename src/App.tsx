import { useCallback, useState } from 'react';
import { Mainlayout } from './layouts/main-layout';
import { Carousel } from './components/Carousel';
import { CarouselTitle } from './components/Carousel/CarouselTitle';
import { Slider } from './components/Slider';
import { data } from './mockData';

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselRotate, setCarouselRotate] = useState(30);
  const [animate, setAnimate] = useState(false);

  const animateSlider = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600);
  };

  const CIRCLE_COUNT = data.length;

  const currentEl = useCallback(
    (index: number) => {
      const degPart = 360 / CIRCLE_COUNT;
      const diff = index - activeSlide;

      if (diff >= 0 && diff <= CIRCLE_COUNT / 2) {
        setCarouselRotate((prev) => prev - diff * degPart);
      } else if (diff >= 0 && diff > CIRCLE_COUNT / 2) {
        const diffReversed = CIRCLE_COUNT - diff;
        setCarouselRotate((prev) => prev + diffReversed * degPart);
      } else if (diff <= -(CIRCLE_COUNT / 2)) {
        const diffReversed = CIRCLE_COUNT - -diff;
        setCarouselRotate((prev) => prev - diffReversed * degPart);
      } else {
        setCarouselRotate((prev) => prev + -diff * degPart);
      }
      setActiveSlide(index);
      animateSlider();
    },
    [activeSlide, CIRCLE_COUNT],
  );

  const decreaseRotate = useCallback(() => {
    setActiveSlide((prev) => prev + 1);
    setCarouselRotate((prev) => prev - 60);
    animateSlider();
  }, [activeSlide, carouselRotate]);

  const increaseRotate = useCallback(() => {
    setActiveSlide((prev) => prev - 1);
    setCarouselRotate((prev) => prev + 60);
    animateSlider();
  }, [activeSlide, carouselRotate]);

  return (
    <Mainlayout>
      <CarouselTitle text="Исторические даты" />
      <Carousel
        CIRCLE_COUNT={CIRCLE_COUNT}
        carouselRotate={carouselRotate}
        currentEl={currentEl}
        activeSlide={activeSlide}
        data={data}
      />
      <Slider
        animate={animate}
        decreaseRotate={decreaseRotate}
        increaseRotate={increaseRotate}
        activeItem={0 + String(CIRCLE_COUNT)}
        sliderCounts={0 + String(activeSlide + 1)}
        activeSlide={activeSlide}
        data={data}
      />
    </Mainlayout>
  );
}

export default App;
