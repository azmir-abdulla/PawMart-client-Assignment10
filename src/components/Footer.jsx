import { Link } from "react-router";
import Logo from "../assets/logo.png";
import { IoMdCall } from "react-icons/io";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#F5F3EE] pt-16 pb-10 text-[#183D3D]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
    
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={Logo} alt="PawMart" className="w-20" />
            <h2 className="text-2xl font-bold"></h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            PawMart connects local pet owners and buyers for adoption and pet
            care products. A safe and friendly community for all pet lovers.
          </p>

          <div className="mt-6 flex gap-4 items-center">
            <p className="flex items-center gap-3 text-lg font-semibold text-[#DD3B44]">
              <span className="text-2xl">
                {" "}
                <IoMdCall />{" "}
              </span>{" "}
              747-800-9880
            </p>
            <p className="uppercase text-sm font-bold text-[#DD3B44]">
              Call Now
            </p>
          </div>

          <div className="flex gap-4 mt-6 text-xl text-gray-700">
            <a href="#" className="hover:text-[#DD3B44] transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-[#DD3B44] transition">
              <AiFillInstagram />
            </a>
            <a href="#" className="hover:text-[#DD3B44] transition">
              <FaSquareXTwitter />
            </a>
            <a href="#" className="hover:text-[#DD3B44] transition">
              <FaYoutube />
            </a>
          </div>
        </div>
    
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Policies</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/privacy" className="hover:text-[#DD3B44]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-[#DD3B44]">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/return" className="hover:text-[#DD3B44]">
                Return Policy
              </Link>
            </li>
            <li>
              <Link to="/ip-policy" className="hover:text-[#DD3B44]">
                IP Policy
              </Link>
            </li>
            <li>
              <Link to="/grievance" className="hover:text-[#DD3B44]">
                Grievance Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <Link to="/breeder" className="hover:text-[#DD3B44]">
                Our Breeder
              </Link>
            </li>
            <li>
              <Link to="/adoption" className="hover:text-[#DD3B44]">
                Our Adoption
              </Link>
            </li>
            <li>
              <Link to="/care" className="hover:text-[#DD3B44]">
                Pet Care
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-[#DD3B44]">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#DD3B44]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/C3cNxsZF/Persian-Cat-White.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/d44k6nTP/Cute-Parrot-Green.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/bRJnX9Nb/British-Shorthair-Kitten.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/PvWZ3c06/Rabbit-Brown.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/gMTyS4d0/Premium-Cat-Food-2kg.jpg"
                alt=""
              />
            </div>
            <div className="w-full h-20 bg-gray-300 rounded-lg">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://i.ibb.co/27vswjDK/Adult-Dog-Food-3kg.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

  
      <div className="border-t border-gray-300 mt-12 pt-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} PawMart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
