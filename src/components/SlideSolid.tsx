import { Slider, SliderProvider, SliderButton, createSlider } from "solid-slider";
import "solid-slider/slider.css";

export default function SlideSolid() {
    return (
      <SliderProvider>
        <Slider options={{ loop: true }}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>
        <SliderButton prev>Previous</SliderButton>
        <SliderButton next>Next</SliderButton>
      </SliderProvider>
    );
  };