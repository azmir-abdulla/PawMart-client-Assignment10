import React from "react";
import { FaHeart, FaPaw, FaHome } from "react-icons/fa";

const WhyAdoptSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          <span className="text-teal-500">🐾</span> Why Adopt from PawMart?
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-teal-50 p-8 rounded-xl shadow-lg">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-teal-700 mb-4">
              Rescue, Love, Repeat.
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              When you choose to **adopt** from PawMart, you're doing more than
              just finding a pet; you're becoming a **Pet Hero**. You provide a
              loving, second chance to an animal in need, directly combating pet
              overpopulation and supporting local rescue efforts.
            </p>
            <p className="text-gray-700 font-medium leading-relaxed">
              **Adopt, Don't Shop.** Give a deserving pet the happy ending
              they've been waiting for.
            </p>
          </div>

          <div className="md:w-1/2 grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaHeart className="text-4xl text-red-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">Save a Life</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaPaw className="text-4xl text-blue-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">
                Find a Companion
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <FaHome className="text-4xl text-green-500 mx-auto mb-2" />
              <p className="text-sm font-semibold text-gray-700">
                Support Local
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdoptSection;
