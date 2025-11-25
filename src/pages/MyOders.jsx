import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";

import Loader from "../components/Loader";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://pawmart-server-mauve.vercel.app/myorders?email=${user.email}`
    )
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
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">
            🐾 My Listings
          </h1>
          <button className="btn btn-primary">Download Report</button>
        </div>

        {loading ? (
          <Loader></Loader>
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
                    Name
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Buyer Name
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Price
                  </th>

                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Quantity
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {myListings.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-800 font-semibold">
                      {item.username}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.price}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {item.price === 0
                        ? "Free / Adoption"
                        : `${item.quantity}`}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.address}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {item.pickupDate}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{item.phone}</td>
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

export default MyOrders;
