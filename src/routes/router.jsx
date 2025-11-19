import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import PetAndSupplies from '../pages/PetAndSupplies';
import MyListings from '../pages/MyListings';
import AllOrder from '../pages/AllOrder';
import AddListing from '../pages/AddListing';
import AuthLayout from "../Layouts/AuthLayout";
import Login from '../pages/Login';
import Register from '../pages/Register';
import UserProfile from "../pages/UserProfile";
import PrivateRoute from '../providers/PrivateRoute';

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
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
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