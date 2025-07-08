import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // Replace with your logo
import cert1 from "../assets/certification/certification1.png";
import cert2 from "../assets/certification/certification2.png";
import cert3 from "../assets/certification/certification3.png";
import cert4 from "../assets/certification/certification4.png";
import cert5 from "../assets/certification/certification5.png";
import footerImage from "../assets/footerImage.png";

const certifications = [cert1, cert2, cert3, cert4, cert5];

const Footer = () => {
  return (
    <footer className="bg-white pt-12 relative overflow-hidden">
      {/* Certifications Marquee */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Certification</h2>
        <div className="overflow-hidden w-full mb-12">
          <div className="flex gap-32 animate-cert-marquee items-center w-max">
            {certifications.concat(certifications).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`certification-${(idx % certifications.length) + 1}`}
                className="h-20 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 text-sm">
        {/* Contact */}
        <div className="flex flex-col items-start gap-4">
          <img src={logo} alt="logo" className="h-14 w-14 rounded-full border" />
          <div>
            132, Poonam Farm, Navi Pardi, Kamrej,<br />
            Surat - 394150 Gujarat, India.
          </div>
          <div>
            <span className="font-bold">Email - </span>
            <a href="mailto:info@girorganic.com" className="underline text-gray-700 hover:text-primary">info@girorganic.com</a>
          </div>
          <div>
            <span className="font-bold">Phone - </span>
            <a href="tel:+919099909453" className="underline text-gray-700 hover:text-primary">+91-9099909453</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#134e4a] text-white rounded-full p-2">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#134e4a] text-white rounded-full p-2">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#134e4a] text-white rounded-full p-2">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Info</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Ayurvedic Remedies</a></li>
            <li><a href="#">Track Your Order</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#">Search</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund & Cancellations</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-lg mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li><a href="#">All Products</a></li>
            <li><a href="#">Organic Pulses</a></li>
            <li><a href="#">Peanut Butter</a></li>
            <li><a href="#">A2 Gir Cow Ghee</a></li>
            <li><a href="#">Healthy & Tasty Snacks</a></li>
            <li><a href="#">Wood Press Oil</a></li>
            <li><a href="#">Natural Sweetner</a></li>
            <li><a href="#">Value Saver - Combos</a></li>
            <li><a href="#">A2 Gir Cow Milk</a></li>
          </ul>
        </div>
      </div>

      {/* Decorative Footer Image */}
      <div className="w-full">
        <img src={footerImage} alt="Footer Decorative" className="w-full h-52 object-cover block" />
      </div>
      {/* Marquee animation style */}
      <style>{`
        @keyframes cert-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-cert-marquee {
          display: flex;
          min-width: 200%;
          animation: cert-marquee 18s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
