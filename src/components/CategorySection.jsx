import { FaDog, FaBone, FaGift, FaMedkit } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";

const categories = [
  {
    icon: <MdOutlinePets className="text-4xl " />,
    title: "Pets (Adoption)",
    desc: "Find loving pets ready for adoption.",
  },
  {
    icon: <FaBone className="text-4xl " />,
    title: "Pet Food",
    desc: "Healthy and quality food for all pets.",
  },
  {
    icon: <FaGift className="text-4xl " />,
    title: "Accessories",
    desc: "Toys, collars, beds, and more.",
  },
  {
    icon: <FaMedkit className="text-4xl " />,
    title: "Pet Care Products",
    desc: "Medicines, grooming & health items.",
  },
];

export default function CategorySection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Browse by Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="p-6 bg-base-100 shadow-md rounded-2xl cursor-pointer border hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-primary mb-3 flex  justify-center items-center">{cat.icon}</div>
            <h3 className="font-semibold text-lg text-center">{cat.title}</h3>
            <p className="text-sm opacity-75 mt-1 text-center">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
