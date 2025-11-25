import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://pawmart-server-mauve.vercel.app/mylistings?email=${user.email}`
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



  const handleDelete = (id) => {

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!",
}).then((result) => {
  if (result.isConfirmed) {

     fetch(`https://pawmart-server-mauve.vercel.app/recentlist/${id}`, {
       method: "DELETE",
       headers: {
         "Content-Type": "application/json",
       },
     })
       .then((res) => res.json())
       .then((data) => {
        //  console.log("Success:", data);
         Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success",
         });
       })
       .catch((error) => {
         console.error("Error:", error);
       });

   
  }
});

  };
  return (
    <>
      <Helmet>
        <title>My Listing</title>
      </Helmet>
      <header>
        <Navbar />
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          🐾 My Listings
        </h1>

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
                      <Link
                        to={`/update/${item._id}`}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg flex justify-center items-center gap-1 transition"
                      >
                        <FaEdit /> Update
                      </Link>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg flex justify-center items-center gap-1 transition"
                      >
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
