import React, { use } from 'react';
import HelmetExport from 'react-helmet';
import CategorySection from '../components/CategorySection';
import RecentListingsSection from '../components/RecentListingsSection';
import WhyAdoptSection from '../components/WhyAdoptSection';
import PetHeroesSection from '../components/PetHeroesSection';
import { useLoaderData } from 'react-router';
import ProductsCard from '../components/ProductsCard';


const Home = () => {
  const data = useLoaderData();

    return (
      <>
        <HelmetExport>
          <title>Home</title>
        </HelmetExport>
        {/* <HeroSlider></HeroSlider> */}
        <CategorySection></CategorySection>






        // recent product
        <h1 className="text-center font-bold text-2xl mb-10 mt-10">
          Explore Our Pets And Supplies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((petsandsupplie) => (
            <ProductsCard
              key={petsandsupplie._id}
              petsandsupplie={petsandsupplie}
            ></ProductsCard>
          ))}
        </div>


        <WhyAdoptSection></WhyAdoptSection>
        <PetHeroesSection></PetHeroesSection>
      </>
    );
};

export default Home;