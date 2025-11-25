import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import CategorySection from "../components/CategorySection";
// import RecentListingsSection from "../components/RecentListingsSection";
import WhyAdoptSection from "../components/WhyAdoptSection";
import PetHeroesSection from "../components/PetHeroesSection";
import { useLoaderData } from "react-router";
import ProductsCard from "../components/ProductsCard";
import Loader from "../components/Loader";

const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (data) {
      setItems(data);
      setLoading(false);
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <CategorySection />

      <h1 className="text-center font-bold text-2xl mb-10 mt-10">
        Explore Our Pets And Supplies
      </h1>

      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((petsandsupplie) => (
            <ProductsCard
              key={petsandsupplie._id}
              petsandsupplie={petsandsupplie}
            />
          ))}
        </div>
      )}

      <WhyAdoptSection />
      <PetHeroesSection />
    </>
  );
};

export default Home;
