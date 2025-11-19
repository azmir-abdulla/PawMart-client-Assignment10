import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <>

            <header>
                <Navbar></Navbar>
            </header>


            <main>
                <Outlet
                ></Outlet>
            </main>

            <footer>

            </footer>





        </>
    );
};

export default AuthLayout;