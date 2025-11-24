import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSlider from "../components/HeroSlider";


const HomeLayout = () => {
    return (
      <>
        <header>
            <Navbar className="w-11/12"></Navbar>
        </header>
        <HeroSlider></HeroSlider>
        <main className='w-11/12 mx-auto'>
          <Outlet>
          </Outlet>
        </main>

        <footer>
          <Footer></Footer>
        </footer>
      </>
    );
};

export default HomeLayout;