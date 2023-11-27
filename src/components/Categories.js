import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { colors, device, images } from '../constants';
// import Carousel from 'react-native-snap-carousel';
// import './icons/style.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon from 'react-native-vector-icons/Entypo';
import styled from "styled-components/native";
import example1 from '../assets/slider-badag.jpg'
import example2 from '../assets/slider-badging.jpg'
import example3 from '../assets/slider-scale.jpg'
import example4 from '../assets/slider-scales.jpg'
// icons
// import SvgCategoryBackground from './icons/Svg.CategoryBackground';
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import Button from './Button';
const myIcon = <Icon name="star" size={25} color="#ffd504" />;
// data
const categoriesData = [
  { id: 1, image: 'logoDisney' },
  { id: 2, image: 'logoPixar' },
  { id: 3, image: 'logoMarvel' },
  { id: 4, image: 'logoStarWars' },
  { id: 5, image: 'logoNatGeo' }
];


const Categories = ({ dataset1 }) => {
  console.log(dataset1)
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const isCarousel = React.useRef(null)
  const { length } = categoriesData;
  const bgWidth = Math.ceil((device.width - 16 - length * 18) / length);

  return (
    <View>
      <Carousel {...settings}>
        {/* update the settings by passing the setting object as props */}
        {
          dataset1.map((data, index) => (
            <View key={index}>
              <Wrap >

                <a alt="image">
                  <View style={styles.bannertext}>
                    <Text style={styles.texts}>{myIcon}{data.rating}/10</Text>
                    <Text style={styles.bannerheading}>{data.name}</Text>
                    <Text style={styles.texts}>{data.description}</Text>
                    <Button style={styles.watchnow}><Text style={{ color: 'white' }}>Watch Now </Text></Button>
                  </View>
                  <Image source={{ uri: data.backdrop }} alt="" />
                </a>
              </Wrap>
            </View>
          )

          )
        }

      </Carousel>
    </View>
  )
};
const Carousel = styled(Slider)`
  margin-top: 20px;
  ${"" /* Overwriting the styles */}

  & > button {
    opacity: 0;

    height: 100%;
    width: 5vw;
    z-index: 1;
  }

  &:hover {
    & > button {
      opacity: 1;
      ${"" /* 0.4s represents time taken for transition and 0s represents after how much time transition will start or take effect */
  }
      transition: opacity 0.4s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -60px;
  }
  .slick-next {
    right: -60px;
  }
`;

const Wrap = styled.View`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    ${"" /* This shadow code can created using Online calculators*/}
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    img {
      width: 100%;
      height: 500px;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  },
  
`;
const styles = {
  bannertext: {
    position: 'absolute',
    height: 500,
    paddingTop: 10,
    paddingHorizontal: 40,
    backgroundColor: '#00000047',
    color: 'white'
  },
  watchnow: {
    textAlign: 'left',
    justifyContent: 'left',
    backgroundColor: '#f65f54',
    color: 'white',
    borderRadius: '30px',
    width: 200,
  },
  texts: {
    fontSize: 20,
    fontFamily: 'Roboto Condensed',
    letterSpacing: '1px'
  },
  bannerheading: {
    fontSize: 40,
    fontFamily: 'Roboto Condensed',
    marginTop: 10,
    marginBottom: 10
  }
}

export default Categories;
