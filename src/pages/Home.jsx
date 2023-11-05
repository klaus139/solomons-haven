import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import MostPopular from '../components/popular/MostPopular';
import Whoweare from '../components/whoweare/Whoweare';
import Service from '../components/service/Service';

const Home = () => {
  return (
    <>
    <Hero />
    <HomeAbout />
    <MostPopular />
    <Whoweare />
    <Service />
    
    
    </>
  )
}

export default Home