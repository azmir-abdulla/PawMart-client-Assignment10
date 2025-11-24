import React from 'react';
import Navbar from '../components/Navbar';
import HelmetExport from 'react-helmet';
import Footer from '../components/Footer';
import { useLoaderData } from 'react-router';
import ProductsCard from '../components/ProductsCard';

const PetAndSupplies = () => {

const data = useLoaderData();
console.log(data);





      return (
        <>
          <HelmetExport>
            <title>Pet And Supplies</title>
          </HelmetExport>

          <header>
            <Navbar></Navbar>
          </header>
          <main className="w-11/12 mx-auto">
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
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </>
      );
};

export default PetAndSupplies;