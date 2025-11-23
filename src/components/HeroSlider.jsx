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
      // Image: Happy dog, cat, or a mix of pets
      imageUrl: "https://i.ibb.co/7xRDG47t/download-6.jpg", // Placeholder for Pets Image
    },
    {
      // Tagline 2
      title: "Adopt, Don’t Shop",
      subtitle: "Give a loving pet a second chance and a place to call home.",
      buttonText: "Learn About Adoption",
      // Image: Owner hugging a pet, showing the connection
      imageUrl: "https://i.ibb.co/60QHQjnx/download-5.jpg", // Placeholder for Adoption Image
    },
    {
      // Tagline 3
      title: "Every Pet Deserves Love and Care",
      subtitle: "Open your heart and home to a companion who will cherish you.",
      buttonText: "Volunteer Today",
      // Image: Close-up of a kitten or puppy looking adorable
      imageUrl:
        "https://i.ibb.co/21XZyPFw/7-Key-Signs-You-re-Wealthier-Than-You-Think.jpg", // Placeholder for Love & Care Image
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      // Use a longer delay for taglines to be read
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={0} // Space between slides is usually 0 for a full-width banner
      slidesPerView={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            // Increased height for a more impactful banner section
            className="w-full h-[500px] relative flex justify-center items-center text-center"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-[#0000008a] bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
              {/* Main Tagline */}
              <h1 className="text-5xl md:text-6xl font-extrabold mb-4 shadow-text">
                {slide.title}
              </h1>
              {/* Supporting Subtitle */}
              <p className="text-xl md:text-2xl mb-8 font-medium max-w-2xl">
                {slide.subtitle}
              </p>
              {/* Call to Action Button */}
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
