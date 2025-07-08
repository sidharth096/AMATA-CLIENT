import React from "react";
import cowImg from "../assets/cow.png";
import cowsImg from "../assets/cows.jpg";
import bottleImg from "../assets/bottle.jpg";
import { FaFlask, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-[#f5f5ef] to-white min-h-screen py-12">
      {/* Section 1: Sustainable Farming */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-12 mb-16 border border-gray-100">
        {/* Left */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-5 text-primary leading-tight">
            Sustainable Farming Is The Way Ahead
          </h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            At GirOrganic, we blend tradition with modernity, ensuring hygiene and quality. Our farm is free from chemical fertilizers, using cow dung and urine as natural alternatives. Healthy cows are milked hygienically with untouched technology, producing pure A2 milk daily. Calves always receive 40-50% of their mother’s milk first, ensuring care for every life.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center group">
              <FaFlask className="text-3xl text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-600 font-semibold">Purely Advanced Milking</span>
            </div>
            <div className="flex flex-col items-center group">
              <FaLeaf className="text-3xl text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span className="text-xs text-gray-600 font-semibold">Natural Fertilizers</span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flex justify-center">
          <img
            src={cowsImg}
            alt="Cows"
            className="rounded-[2.5rem] w-72 h-60 object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </div>

      {/* Section 2: Why GirOrganic */}
      <div className="relative max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-10 pt-24 pb-20 mb-16 border border-gray-100 overflow-hidden">
        {/* Decorative background (optional) */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-white opacity-30 pointer-events-none" /> */}
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary tracking-tight">
          Why GirOrganic <span className="text-yellow-400">*</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: A2 Milk Benefits */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-primary">A2 Milk Benefits</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Gir Organic A2 Milk, sourced from Gir cows, ensures purity and natural goodness. With A2 protein, it supports easy digestion and better nutrient absorption.
            </p>
          </div>
          {/* Right: Bottle and badge */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative flex flex-col items-center">
              <img
                src={bottleImg}
                alt="A2 Milk Bottle"
                className="w-36 h-56 object-contain z-10 relative drop-shadow-xl bg-white rounded-2xl border"
              />
              <div className="absolute top-4 right-[-40px] bg-yellow-300 text-primary font-bold px-6 py-3 rounded-xl shadow-lg text-lg z-20 border-2 border-yellow-400">
                * 550+ <br /> <span className="text-xs font-semibold">Gir Cows</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom: Cow and Practices */}
        <div className="flex flex-col md:flex-row items-end gap-12 mt-12">
          {/* Cow Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={cowImg}
              alt="Gir Cow"
              className="w-64 h-48 object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
            />
          </div>
          {/* Practices */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-primary">Traditional and Ethical Practices</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We prioritize the well-being of Gir cows with stress-free care, natural grazing, and a calf-first policy. Our sustainable practices reflect India’s agricultural heritage.
            </p>
            {/* Optional: Add a small farm SVG/illustration here */}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center border border-gray-100">
        <h3 className="text-2xl font-bold text-primary mb-4">Our Farm in Action</h3>
        <video
          src="/assets/your-video.mp4" // <-- Replace with your actual video path
          controls
          className="rounded-2xl w-full h-[400px] object-cover border-2 border-primary shadow-lg"
          poster="/assets/your-poster.jpg" // Optional
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default About;
