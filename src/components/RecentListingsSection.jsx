import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaTag, FaPaw } from "react-icons/fa";

// --- Static Data to simulate the MongoDB .limit(6) result ---
const mockListings = [
  {
    _id: "LST001",
    name: "Buddy",
    category: "Dog",
    price: "Free for Adoption",
    location: "Dhaka, Bangladesh",
    imageUrl: "https://i.ibb.co/30H9q14/happy-pets-banner.jpg", // Replace with dog image
  },
  {
    _id: "LST002",
    name: "Whiskers",
    category: "Cat",
    price: "$50",
    location: "Chittagong, Bangladesh",
    imageUrl: "https://i.ibb.co/Y8K1v7y/puppy-kitten-banner.jpg", // Replace with cat image
  },
  {
    _id: "LST003",
    name: "Sunny",
    category: "Bird",
    price: "$20",
    location: "Rajshahi, Bangladesh",
    imageUrl: "https://i.ibb.co/6y45p4T/owner-hugging-dog-banner.jpg", // Replace with bird image
  },
  {
    _id: "LST004",
    name: "Sheldon",
    category: "Turtle",
    price: "Free for Adoption",
    location: "Khulna, Bangladesh",
    imageUrl: "https://via.placeholder.com/300x200?text=Turtle+Image", // Placeholder for turtle image
  },
  {
    _id: "LST005",
    name: "Rabbit",
    category: "Small Animal",
    price: "$35",
    location: "Sylhet, Bangladesh",
    imageUrl: "https://via.placeholder.com/300x200?text=Rabbit+Image", // Placeholder for rabbit image
  },
  {
    _id: "LST006",
    name: "Leo",
    category: "Dog",
    price: "Free for Adoption",
    location: "Rangpur, Bangladesh",
    imageUrl: "https://via.placeholder.com/300x200?text=Leo+Dog+Image", // Placeholder for another dog image
  },
];

// Mock function for navigation
const handleViewDetails = (listingId) => {
  // In a real app, this would use a router (like react-router-dom)
  // Example: navigate(`/listings/${listingId}`);
  console.log(`Navigating to details page for listing ID: ${listingId}`);
  alert(`Showing details for ${listingId}`);
};

const RecentListingsSection = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // --- Simulated Fetching Data ---
    // In a real application, you would make an API call here:
    // fetch('/api/recent-listings?limit=6').then(res => res.json()).then(data => setListings(data));

    setTimeout(() => {
      setListings(mockListings);
      setLoading(false);
    }, 500); // Simulating a network delay
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        Loading recent listings...
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="text-center py-10 text-xl text-gray-600">
        No recent listings found.
      </div>
    );
  }

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          <span className="text-orange-500">3️⃣</span> Recent Listings
        </h2>

        {/* Listings Grid (Displays 6 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div
              key={listing._id}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={listing.imageUrl}
                  alt={listing.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5">
                {/* Name and Category */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {listing.name}
                  </h3>
                  <span className="flex items-center text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                    <FaPaw className="mr-1" /> {listing.category}
                  </span>
                </div>

                {/* Price and Location */}
                <div className="space-y-2 mb-4">
                  <p className="flex items-center text-lg font-bold">
                    <FaTag className="text-green-500 mr-2" />
                    <span
                      className={
                        listing.price === "Free for Adoption"
                          ? "text-green-600"
                          : "text-gray-900"
                      }
                    >
                      {listing.price}
                    </span>
                  </p>
                  <p className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="text-red-400 mr-2" />
                    {listing.location}
                  </p>
                </div>

                {/* See Details Button */}
                <button
                  onClick={() => handleViewDetails(listing._id)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Button */}
        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition duration-300 shadow-lg">
            View All Adoptable Pets
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentListingsSection;
