
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData} from "react-router";
import { toast, ToastContainer } from "react-toastify";

const UpdateProducts = () => {
  const data = useLoaderData(); // pre-loaded product data
    const item = data.result;
    console.log(item);



      const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
          name: e.target.name.value,
          category: e.target.category.value,
          price: e.target.price.value,
          location: e.target.location.value,
          description: e.target.description.value,
          image: e.target.image.value,
        
        };
        fetch(
          `https://pawmart-server-mauve.vercel.app/recentlist/${item._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("Success:", data);
            toast.success("Product updated successfully!");
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
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Update Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={item.name}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              name="category"
              defaultValue={item.category}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              defaultValue={item.price}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={item.location}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={item.description}
              rows="3"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              defaultValue={item.image}
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Update Listing
            </button>
          </div>
        </form>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default UpdateProducts;
