import React from 'react';
import HelmetExport from 'react-helmet';
import HeroSlider from '../components/HeroSlider';
import CategorySection from '../components/CategorySection';
import RecentListingsSection from '../components/RecentListingsSection';


const Home = () => {
    return (
      <>
        <HelmetExport>
          <title>Home</title>
        </HelmetExport>
        <HeroSlider></HeroSlider>
        <CategorySection></CategorySection>
        <RecentListingsSection></RecentListingsSection>
      </>
    );
};

export default Home;