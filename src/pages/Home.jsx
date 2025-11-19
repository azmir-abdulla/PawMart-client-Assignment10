import React from 'react';
import HelmetExport from 'react-helmet';
import HeroSlider from '../components/HeroSlider';


const Home = () => {
    return (
      <>
        <HelmetExport>
          <title>Home</title>
        </HelmetExport>
        <HeroSlider></HeroSlider>
      </>
    );
};

export default Home;