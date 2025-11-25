import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router";
import ProductsCard from "../components/ProductsCard";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const PetAndSupplies = () => {
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
        <title>Pet And Supplies</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className="w-11/12 mx-auto py-10">
        <h1 className="text-center font-bold text-2xl mb-10">
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
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default PetAndSupplies;
