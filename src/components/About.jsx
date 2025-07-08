import React from "react";
import cowImg from "../assets/cow.png"; // Replace with your actual image
import cowsImg from "../assets/cows.jpg"; // Replace with your actual image
import bottleImg from "../assets/bottle.jpg"; // Replace with your actual image
import { FaFlask, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#f5f5ef] py-8">
      {/* Section 1 */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow p-8 flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sustainable Farming Is The Way Ahead
          </h2>
          <p className="text-gray-700 mb-6">
            At GirOrganic, we blend tradition with modernity, ensuring hygiene
            and quality. Our farm is free from chemical fertilizers, using cow
            dung and urine as natural alternatives. Healthy cows are milked
            hygienically with untouched technology, producing pure A2 milk
            daily. Calves always receive 40-50% of their mother’s milk first,
            ensuring care for every life.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <FaFlask className="text-2xl text-primary mb-1" />
              <span className="text-xs text-gray-600">
                Purely Advanced Milking
              </span>
            </div>
            <div className="flex flex-col items-center">
              <FaLeaf className="text-2xl text-primary mb-1" />
              <span className="text-xs text-gray-600">Natural Fertilizers</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src={cowsImg}
            alt="Cows"
            className="rounded-[40%] w-64 h-48 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-t-[50%] rounded-b-2xl shadow p-8 pt-20 pb-16 overflow-hidden">
        {/* Decorative background (optional) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "url('/path/to/bg.svg') center/cover no-repeat",
          }}
        />
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Why GirOrganic <span className="text-yellow-400">*</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: A2 Milk Benefits */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">A2 Milk Benefits</h3>
            <p className="text-gray-700 mb-6">
              Gir Organic A2 Milk, sourced from Gir cows, ensures purity and
              natural goodness. With A2 protein, it supports easy digestion and
              better nutrient absorption.
            </p>
          </div>
          {/* Right: Bottle and badge */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative">
              <img
                src={bottleImg}
                alt="A2 Milk Bottle"
                className="w-32 h-48 object-contain z-10 relative"
              />
              <div className="absolute top-4 right-[-40px] bg-yellow-300 text-primary font-bold px-4 py-2 rounded-xl shadow-lg text-lg z-20">
                * 550+ <br /> Gir Cows
              </div>
            </div>
          </div>
        </div>
        {/* Bottom: Cow and Practices */}
        <div className="flex flex-col md:flex-row items-end gap-8 mt-10">
          {/* Cow Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={cowImg}
              alt="Gir Cow"
              className="w-56 h-40 object-cover rounded-[40%] shadow-lg"
            />
          </div>
          {/* Practices */}
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Traditional and Ethical Practices
            </h3>
            <p className="text-gray-700">
              We prioritize the well-being of Gir cows with stress-free care,
              natural grazing, and a calf-first policy. Our sustainable
              practices reflect India’s agricultural heritage.
            </p>
            {/* Optional: Add a small farm SVG/illustration here */}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl shadow p-4 flex justify-center items-center">
        <video
          src="/assets/your-video.mp4" // <-- Replace with your actual video path
          controls
          className="rounded-xl w-full h-[350px] object-cover"
          poster="/assets/your-poster.jpg" // Optional
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default About;
