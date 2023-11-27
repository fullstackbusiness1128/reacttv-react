import styled from "styled-components/native";
import React, { useState, useEffect } from 'react';
// import aa from '../assets/'
import { Image ,View,Video} from "react-native";
import disneyImage from "../assets/viewers-disney.png"
import disneyVideo from "../assets/videos/1564674844-disney.mp4"
import pixerImage  from "../assets/viewers-pixar.png"
import pixerVideo  from "../assets/videos/1564676714-pixar.mp4"
import marvelImage  from "../assets/viewers-marvel.png"
import marvelVideo  from "../assets/videos/1564676115-marvel.mp4"
import starWarImage  from "../assets/viewers-starwars.png"
import starWarVideo  from "../assets/videos/1608229455-star-wars.mp4"
import nationaGeoImage  from "../assets/viewers-national.png"
import nationalGeoVideo  from "../assets/videos/1564676296-national-geographic.mp4"
const axios = require('axios');
const Viewers = () => {
  return (
    <View>
     <Container> 
       <Wrap> 
      <View>
      <Wrap> 
        <Image source={disneyImage} alt="" />
        {/* <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src={disneyVideo} type="video/mp4" />
        </video> */}
       </Wrap> 
      </View>
      <View>
       <Wrap> 
        {/* Chrome does not allow any video to be autoplayed if it's not 'muted' */}
        <Image source={pixerImage} alt="" />
        {/* <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src={pixerVideo} type="video/mp4" />
        </video>*/}
      </Wrap> 
      </View>
      <View>
       <Wrap> 
        <Image source={marvelImage} alt="" />
        {/* <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src={marvelVideo} type="video/mp4" />
        </video>
      </Wrap> 
          </View>
          <View>
       <Wrap> 
        <Image source={starWarImage} alt="" />
        {/* <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source src={starWarVideo} type="video/mp4" />
        </video> */}
       </Wrap> 
      </View>
      <View>
       <Wrap> 
        <Image source={nationaGeoImage} alt="" />
        {/* <video autoPlay={true} muted={true} loop={true} playsInline={true}>
          <source
            src={nationalGeoVideo}
            type="video/mp4"
          />
        </video> */}
        </Wrap> 
        </View>
     </Wrap> 
    </Container> 
    
    </View>
  );
};

// const Container = styled.View`
//   margin-top: 4px;
//   padding: 30px 0px 26px;
//   display: grid;
//   grid-gap: 25px;
//   grid-template-columns: repeat(5, minmax(0, 1fr));
//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//   }
// `;
const Container = styled.View`
  margin-top: 4px;
  padding: 30px 0px 26px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;
const Wrap = styled.View`
  padding-top: 56;
  border-radius: 10px;
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    ${
      "" /* the image keeps its aspect ratio and fills the given dimension. The image will be clipped to fit: */
    }
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
