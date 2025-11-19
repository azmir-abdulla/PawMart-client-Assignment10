import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
      <>
        <header>
            <Navbar className="w-11/12"></Navbar>
        </header>

        <main>
          <Outlet></Outlet>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </>
    );
};

export default HomeLayout;