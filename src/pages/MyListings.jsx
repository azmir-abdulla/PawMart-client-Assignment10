import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/mylistings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyListings(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          🐾 My Listings
        </h1>

        {loading ? (
          <p className="text-center text-gray-600">Loading your listings...</p>
        ) : myListings.length === 0 ? (
          <p className="text-center text-gray-600">
            You have not added any listings yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Owner Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myListings.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.category}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {item.price === 0 ? "Free / Adoption" : `$${item.price}`}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.location}</td>
                    <td className="px-6 py-4 text-gray-600">{item.email}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg flex justify-center items-center gap-1 transition">
                        <FaEdit /> Update
                      </button>
                      <button className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg flex justify-center items-center gap-1 transition">
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MyListings;
