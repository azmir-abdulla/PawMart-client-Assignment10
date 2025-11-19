import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import PetAndSupplies from '../pages/PetAndSupplies';
import MyListings from '../pages/MyListings';
import AllOrder from '../pages/AllOrder';
import AddListing from '../pages/AddListing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/pet-and-supplies",
    element: <PetAndSupplies></PetAndSupplies>,
  },
  {
    path: "/add-listing",
    element: <AddListing></AddListing>,
  },
  {
    path: "/my-listings",
    element: <MyListings></MyListings>,
  },
  {
    path: "/my-orders",
    element: <AllOrder></AllOrder>,
  },
]);
        
export default router;