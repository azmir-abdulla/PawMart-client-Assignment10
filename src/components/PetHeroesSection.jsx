import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Avatar1 from "../assets/testi_avatar01.png";
import Avatar2 from "../assets/testi_avatar02.png";


// --- Static Data for Pet Heroes ---
const petHeroes = [
  {
    id: 1,
    name: "Aisha & Max",
    role: "Adopters of 'Leo' the Dog",
    quote:
      "Leo filled our home with so much joy and love. The adoption process was seamless and incredibly rewarding!",
    profileUrl: "https://i.ibb.co/zWnqtVVm/testi-avatar01.png", // Placeholder for Aisha's image
  },
  {
    id: 2,
    name: "David H.",
    role: "Veteran Foster Caregiver",
    quote:
      "Fostering gives these animals a bridge to a better life. Seeing them go to their forever homes is the best feeling.",
    profileUrl: "https://i.ibb.co/4n87RpQm/testi-avatar02.png", // Placeholder for David's image
  },
  {
    id: 3,
    name: "Sara & Gizmo",
    role: "Adopters of 'Molly' the Cat",
    quote:
      "Molly is the purr-fect addition to our family. We highly recommend adopting—it truly changes lives!",
    profileUrl: "https://i.ibb.co/zWnqtVVm/testi-avatar01.png", // Placeholder for Sara's image
  },
];

const PetHeroesSection = () => {
  return (
    <section className="py-16 bg-gray-100 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          <span className="text-orange-500">🐕</span> Meet Our Pet Heroes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {petHeroes.map((hero) => (
            <div
              key={hero.id}
              className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 flex flex-col items-center text-center"
            >
              {/* Profile Image */}
              <img
                src={hero.profileUrl}
                alt={hero.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md -mt-12"
              />

              {/* Quote */}
              <div className="text-gray-700 italic mb-4 relative">
                <FaQuoteLeft className="text-orange-300 absolute -top-2 -left-4 opacity-50 text-2xl" />
                <p className="pt-2">{hero.quote}</p>
              </div>

              {/* Name and Role */}
              <h4 className="text-xl font-bold text-gray-800 mt-auto">
                {hero.name}
              </h4>
              <p className="text-sm text-orange-600 font-medium">{hero.role}</p>

              {/* Ratings (Optional but adds credibility) */}
              <div className="flex mt-2 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetHeroesSection;
