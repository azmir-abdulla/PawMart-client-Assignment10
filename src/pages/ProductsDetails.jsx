import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaMapMarkerAlt,
  FaUserCircle,
  FaTimes,
  FaPaw,
  FaTag,
} from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const ProductsDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const product = data.result;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    _id,
    name,
    category,
    price,
    location,
    description,
    image,
    email: ownerEmail,
  } = product || {};
  const isPet = category.toLowerCase().includes("pet");

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Product Details Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left: Image */}
            <div className="relative h-96 lg:h-full">
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                {category}
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
                {name}
              </h1>

              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                <span>{location}</span>
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-6">
                {isPet || price === 0 ? "Free / Adoption" : `$${price}`}
              </div>

              {/* Owner Info */}
              <div className="flex items-center p-4 bg-gray-50 rounded-lg mb-6 border border-gray-100">
                <FaUserCircle className="text-4xl text-gray-400 mr-4" />
                <div>
                  <p className="text-sm text-gray-500">Listed by</p>
                  <p className="font-semibold text-gray-800">
                    {ownerEmail || "Unknown Owner"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg flex justify-center items-center gap-2"
              >
                {isPet ? <FaPaw /> : <FaTag />}
                {isPet ? "Adopt Now" : "Order Now"}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ----------------- ORDER MODAL ----------------- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
        >
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold text-gray-800">
                {isPet ? "Adoption Form" : "Order Form"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-red-500 transition"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Modal Form */}
            <form className="p-6 space-y-4">
              {/* Buyer Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Buyer Name
                  </label>
                  <input
                    type="text"
                    value={user.displayName}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-gray-600 text-sm cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Buyer Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-gray-600 text-sm cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Listing ID
                  </label>
                  <input
                    type="text"
                    value={_id}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-gray-600 text-xs cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-gray-800 font-medium text-sm cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Price
                  </label>
                  <input
                    type="text"
                    value={isPet ? "Free" : `$${price}`}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-blue-600 font-bold cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase">
                    Quantity
                  </label>
                  <input
                    type="number"
                    value={isPet ? "1" : "1"}
                    readOnly
                    className="w-full mt-1 p-2 bg-gray-100 border rounded text-gray-600 cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Date & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+880..."
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pick-up Date
                  </label>
                  <input
                    type="date"
                    className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Additional Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Any special requests?"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-200 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
                >
                  Confirm {isPet ? "Adoption" : "Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default ProductsDetails;
