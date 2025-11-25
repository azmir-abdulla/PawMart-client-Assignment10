import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      // Tagline 1
      title: "Find Your Furry Friend Today!",
      subtitle:
        "Browse hundreds of lovable pets waiting for their forever homes.",
      buttonText: "Meet Our Pets",

      imageUrl: "https://i.ibb.co/7xRDG47t/download-6.jpg", 
    },
    {
      // Tagline 2
      title: "Adopt, Don’t Shop",
      subtitle: "Give a loving pet a second chance and a place to call home.",
      buttonText: "Learn About Adoption",
      imageUrl: "https://i.ibb.co/60QHQjnx/download-5.jpg", 
    },
    {
      // Tagline 3
      title: "Every Pet Deserves Love and Care",
      subtitle: "Open your heart and home to a companion who will cherish you.",
      buttonText: "Volunteer Today",
      imageUrl:
        "https://i.ibb.co/21XZyPFw/7-Key-Signs-You-re-Wealthier-Than-You-Think.jpg", 
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={0} 
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-[500px] relative flex justify-center items-center text-center"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
         
            <div className="absolute inset-0 bg-[#0000008a] bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
            
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 shadow-text">
                {slide.title}
              </h1>
             
              <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl">
                {slide.subtitle}
              </p>
           
              <button className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition duration-300 transform hover:scale-105">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
