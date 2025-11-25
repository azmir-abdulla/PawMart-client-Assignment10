import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";
import { FaDownload } from "react-icons/fa";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([
    // Sample static data for UI
    {
      _id: "1",
      productName: "Persian Cat (White)",
      buyerName: "John Doe",
      price: 0,
      quantity: 1,
      address: "Chattogram, Bangladesh",
      date: "2025-01-12",
      phone: "+880123456789",
    },
    {
      _id: "2",
      productName: "Pet Grooming Brush",
      buyerName: "John Doe",
      price: 15,
      quantity: 2,
      address: "Dhaka, Bangladesh",
      date: "2025-02-05",
      phone: "+880987654321",
    },
  ]);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🧾 My Orders</h1>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
            <FaDownload /> Download Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                  Product Name
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
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    {order.productName}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.buyerName}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {order.price === 0 ? "Free / Adoption" : `$${order.price}`}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.quantity}</td>
                  <td className="px-6 py-4 text-gray-600">{order.address}</td>
                  <td className="px-6 py-4 text-gray-600">{order.date}</td>
                  <td className="px-6 py-4 text-gray-600">{order.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MyOrders;
