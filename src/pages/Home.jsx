import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import MostPopular from '../components/popular/MostPopular';
import Whoweare from '../components/whoweare/Whoweare';
import Service from '../components/service/Service';
import Donate from '../components/donate/Donate';
import Joinus from '../components/joinus/Joinus';
import VideoDescription from '../components/videosec/video';
import { images } from '../constants';

const Home = () => {
  
  return (
    <>
    <Hero />
    <HomeAbout />
    <MostPopular />
    <VideoDescription  videoUrl={images.video} description="new program"/>
    <Whoweare />
    <Service />
    <Donate /> 
     <Joinus />
    
    
    </>
  )
}

export default Home