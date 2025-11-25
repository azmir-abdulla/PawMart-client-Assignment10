import React from "react";
import preloader from "../assets/preloader.gif"; // adjust path if needed

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <img
        src={preloader}
        alt="Loading..."
        className="w-32 h-32 animate-spin-slow"
      />
    </div>
  );
};

export default Loader;
