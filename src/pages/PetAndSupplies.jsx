import React from 'react';
import Navbar from '../components/Navbar';
import HelmetExport from 'react-helmet';

const PetAndSupplies = () => {
      return (
        <>
          <HelmetExport>
            <title>Pet And Supplies</title>
          </HelmetExport>

          <header>
            <Navbar></Navbar>
          </header>
        </>
      );
};

export default PetAndSupplies;