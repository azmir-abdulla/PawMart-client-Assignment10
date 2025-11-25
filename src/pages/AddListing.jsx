import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const AddListing = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData = {
      name: e.target.name.value,
      category: e.target.category.value,
      price: e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      date: e.target.date.value,
      email: user?.email || "",
    };
    fetch("http://localhost:3000/recentlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Listing added successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  };

  return (
    <>
    <ToastContainer></ToastContainer>
      <header>
        <Navbar />
      </header>

      <main className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Listing</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow"
        >
          {/* Product / Pet Name */}
          <div>
            <label className="block font-medium">Product / Pet Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded"
              placeholder="Enter name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium">Category</label>
            <select name="category" className="w-full border p-2 rounded">
              <option value="Pets">Pets</option>
              <option value="Food">Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border p-2 rounded"
              placeholder="0 (if pet is selected)"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              className="w-full border p-2 rounded"
              placeholder="Enter location"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              className="w-full border p-2 rounded"
              rows="4"
              placeholder="Enter description"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium">Image URL</label>
            <input
              type="text"
              name="image"
              className="w-full border p-2 rounded"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium">Pick Up Date</label>
            <input
              name="date"
              type="date"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Email (readonly) */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded bg-gray-100"
              value={user?.email || ""}
              readOnly
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AddListing;
