import React from 'react';
import HelmetExport from 'react-helmet';
import CategorySection from '../components/CategorySection';
import RecentListingsSection from '../components/RecentListingsSection';
import WhyAdoptSection from '../components/WhyAdoptSection';
import PetHeroesSection from '../components/PetHeroesSection';


const Home = () => {
    return (
      <>
        <HelmetExport>
          <title>Home</title>
        </HelmetExport>
        {/* <HeroSlider></HeroSlider> */}
        <CategorySection></CategorySection>
        <RecentListingsSection></RecentListingsSection>
        <WhyAdoptSection></WhyAdoptSection>
        <PetHeroesSection ></PetHeroesSection>
      </>
    );
};

export default Home;