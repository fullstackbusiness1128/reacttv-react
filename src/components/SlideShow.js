import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import { device, images } from '../constants';

// components
import ImageSlide from './ImageSlide';

// data
const slidesData = [
  { image: 'slideStarWarsMandalorian' },
  { image: 'slideAvengersEndgame' },
  { image: 'slideAvatar' },
  { image: 'slideCaptainMarvel' }
];

class SlideShow extends React.Component {
  render() {
    const itemWidth = device.width - 52;

    return (
      <Carousel 
        ref={(c) => {
          this.carousel = c;
        }} bvfr
        autoplay
        autoplayInterval={1000}
        data={slidesData}
        
        renderItem={({ item: { image } }) => (
          <ImageSlide source={images[image]} width={itemWidth} />
        )}
        sliderWidth={device.width}
        itemWidth={itemWidth}
      />
    );
  }
}

export default SlideShow;
