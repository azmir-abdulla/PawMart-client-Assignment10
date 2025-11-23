import React from 'react';
import Navbar from '../components/Navbar';
import HelmetExport from 'react-helmet';
import Footer from '../components/Footer';

const PetAndSupplies = () => {
      return (
        <>
          <HelmetExport>
            <title>Pet And Supplies</title>
          </HelmetExport>

          <header>
            <Navbar></Navbar>
          </header>
          <main>
            
          </main>
          <footer>
            <Footer>  
            </Footer>
          </footer>
        </>
      );
};

export default PetAndSupplies;