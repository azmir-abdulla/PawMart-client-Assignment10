import React from "react";
import { FaMapMarkerAlt, FaTag, FaPaw } from "react-icons/fa";
import { Link } from "react-router";

const ProductsCard = ({petsandsupplie}) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300">
        {/* Card Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={petsandsupplie.image}
            alt={petsandsupplie.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-5">
          {/* Name and Category */}
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-semibold text-gray-800">
              {petsandsupplie.name}
            </h3>
            <span className="flex items-center text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              <FaPaw className="mr-1" /> {petsandsupplie.category}
            </span>
          </div>

          {/* Price and Location */}
          <div className="space-y-2 mb-4">
            <p className="flex items-center text-lg font-bold">
              <FaTag className="text-green-500 mr-2" />
              <span
                className={
                  petsandsupplie.price === "Free for Adoption"
                    ? "text-green-600"
                    : "text-gray-900"
                }
              >
                {petsandsupplie.price}
              </span>
            </p>
            <p className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-red-400 mr-2" />
              {petsandsupplie.location}
            </p>
          </div>

          {/* See Details Button */}

          <Link
            to={`/product-details/${petsandsupplie._id}`}
            className=" btn w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
