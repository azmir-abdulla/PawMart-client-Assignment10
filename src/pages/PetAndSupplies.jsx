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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (data) {
      setItems(data);
      setLoading(false);
    }
  }, [data]);


  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Pet And Supplies</title>
      </Helmet>

      <header>
        <Navbar />
      </header>

      <main className="w-11/12 mx-auto py-10">
        <h1 className="text-center font-bold text-2xl mb-6">
          Explore Our Pets And Supplies
        </h1>

     
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : filteredItems.length === 0 ? (
          <p className="text-center text-gray-600">No items found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((petsandsupplie) => (
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
