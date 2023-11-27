import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native-web'
// import VideoPlayer from 'react-native-video-player'
// import Video from 'react-native-video';
import { Video } from 'expo-av'
import BackButton from '../components/BackButton';
import VideoPlayer from 'expo-video-player'
const VideoPlay = ({ navigation }) =>{
    // const [videoUrl,setVideoUrl]= useState({})
    // setVideoUrl(navigation.state.params.movieDetail)
    console.log(navigation.state.params.movieDetail)
    return (
        <View>
            <BackButton style={{zIndex:1}}  goBack={() =>  navigation.navigate('StackMovieDetails',{movieId: navigation.state.params.movieDetail.id})} />
           <VideoPlayer
  videoProps={{
    shouldPlay: true,
    resizeMode: Video.RESIZE_MODE_CONTAIN,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: navigation.state.params.movieDetail,
    },
   
  }}
/>
        </View>
    )
}
export default VideoPlay;