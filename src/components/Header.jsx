import React, { useState } from 'react'
import { FaUser, FaShoppingCart, FaSearch, FaRupeeSign, FaSeedling, FaCookieBite, FaLeaf, FaBars, FaTimes, FaBookOpen, FaShoppingBag, FaFileAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { GiCow, GiMilkCarton, GiWheat, GiPeanut, GiOlive, GiHoneyJar } from 'react-icons/gi'
import logo from '../assets/logo.jpg'

const categories = [
  { icon: <GiCow className="text-teal-900 text-2xl" />, label: 'All Products' },
  { icon: <GiCow className="text-teal-900 text-2xl" />, label: 'A2 Gir Cow Ghee' },
  { icon: <GiMilkCarton className="text-teal-900 text-2xl" />, label: 'A2 Gir Cow Milk' },
  { icon: <GiWheat className="text-teal-900 text-2xl" />, label: 'Stone Ground Atta' },
  { icon: <FaRupeeSign className="text-teal-900 text-2xl" />, label: 'Value Saver - Combos' },
  { icon: <GiPeanut className="text-teal-900 text-2xl" />, label: 'Stone Ground Peanut butter' },
  { icon: <GiOlive className="text-teal-900 text-2xl" />, label: 'Wood Press Oils' },
  { icon: <GiHoneyJar className="text-teal-900 text-2xl" />, label: 'Natural Sweetener' },
  { icon: <FaLeaf className="text-teal-900 text-2xl" />, label: 'Stone Ground Spices' },
  { icon: <FaSeedling className="text-teal-900 text-2xl" />, label: 'Organic Pulses' },
  { icon: <FaCookieBite className="text-teal-900 text-2xl" />, label: 'Healthy & Tasty Snacks' },
]

const connectLinks = [
  'Track Order',
  'Install App',
  'Contact Us',
  'Lab Reports',
]

const navLinks = [
  { label: 'Shop by Category', icon: <FaShoppingBag className="text-teal-600 text-2xl" /> },
  { label: 'About', icon: <FaBookOpen className="text-teal-600 text-2xl" /> },
  { label: 'Ayurvedic Remedies', icon: <FaShoppingBag className="text-teal-600 text-2xl" /> },
  { label: 'Blog', icon: <FaFileAlt className="text-teal-600 text-2xl" /> },
  { label: 'Connect', icon: <FaFileAlt className="text-teal-600 text-2xl" /> },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false)
  const [mobileConnectOpen, setMobileConnectOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-teal-900 text-white text-center py-2 text-sm font-semibold">
        Get Free delivery on order above Rs 700 within India!
      </div>
      {/* Main header */}
      <div className="flex items-center justify-between py-4 px-8 bg-white shadow-sm relative z-20">
        {/* Hamburger for mobile */}
        <button
          className="lg:hidden mr-2 text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars />
        </button>
        {/* Logo */}
        <div className="flex-1 flex items-center justify-center lg:justify-start">
          <img src={logo} alt="Logo" className="h-16 w-16 rounded-full border" />
        </div>
        {/* Desktop Navigation (hidden if mobile menu is open) */}
        <nav className={`hidden lg:flex flex-1 items-center justify-center gap-8 ${mobileMenuOpen ? 'lg:hidden' : ''}`}>
          <div className="flex items-center gap-8 text-gray-700 font-medium">
            {/* Shop by Category with Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                Shop by Category <span className="text-xs group-hover:hidden">▼</span><span className="text-xs hidden group-hover:inline">▲</span>
              </div>
              <div className="absolute left-0 mt-0 w-[700px] bg-white shadow-lg rounded-lg p-8 flex gap-12 z-30 border-gray-100 min-h-[320px] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                <div className="flex-1 flex flex-col gap-6">
                  {categories.slice(0, 6).map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-4 hover:text-teal-900 cursor-pointer">
                      <span className="flex items-center justify-center w-10 h-10 border rounded-full">{cat.icon}</span>
                      <span className="text-base">{cat.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  {categories.slice(6).map((cat, idx) => (
                    <div key={idx} className="flex items-center gap-4 hover:text-teal-900 cursor-pointer">
                      <span className="flex items-center justify-center w-10 h-10 border rounded-full">{cat.icon}</span>
                      <span className="text-base">{cat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-teal-900">About</a>
            <a href="#" className="hover:text-teal-900">Ayurvedic Remedies</a>
            <a href="#" className="hover:text-teal-900">Blog</a>
            {/* Connect with Dropdown */}
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                Connect <span className="text-xs group-hover:hidden">▼</span><span className="text-xs hidden group-hover:inline">▲</span>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-48 bg-white shadow-lg rounded-lg py-6 px-6 flex flex-col gap-4 z-30 border-gray-100 text-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                {connectLinks.map((link, idx) => (
                  <a key={idx} href="#" className="text-gray-700 hover:text-teal-900 text-lg cursor-pointer">{link}</a>
                ))}
              </div>
            </div>
          </div>
        </nav>
        {/* Cart and Profile icons - always visible, right aligned */}
        <div className="flex items-center gap-6 absolute right-8 top-1/2 -translate-y-1/2 lg:static lg:translate-y-0">
          <FaUser className="text-2xl text-gray-700 cursor-pointer" />
          <FaShoppingCart className="text-2xl text-gray-700 cursor-pointer" />
        </div>
      </div>
      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <button className="text-2xl text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </button>
          <img src={logo} alt="Logo" className="h-14 w-14 rounded-full border" />
        </div>
        <nav className="flex flex-col gap-2 mt-8 px-6">
          {/* Shop by Category Dropdown */}
          <button
            className="flex items-center gap-4 text-teal-700 font-medium text-lg w-full focus:outline-none"
            onClick={() => setMobileCategoryOpen((open) => !open)}
          >
            <FaShoppingBag className="text-2xl" /> Shop by Category
            {mobileCategoryOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </button>
          {mobileCategoryOpen && (
            <div className="pl-10 flex flex-col gap-3 py-2">
              {categories.map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-700 text-base">
                  <span className="w-7 h-7 flex items-center justify-center border rounded-full">{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>
              ))}
            </div>
          )}
          {/* About */}
          <a href="#" className="flex items-center gap-4 text-gray-700 font-medium text-lg">
            <FaBookOpen className="text-2xl" /> About
          </a>
          {/* Ayurvedic Remedies */}
          <a href="#" className="flex items-center gap-4 text-gray-700 font-medium text-lg">
            <FaShoppingBag className="text-2xl" /> Ayurvedic Remedies
          </a>
          {/* Blog */}
          <a href="#" className="flex items-center gap-4 text-gray-700 font-medium text-lg">
            <FaFileAlt className="text-2xl" /> Blog
          </a>
          {/* Connect Dropdown */}
          <button
            className="flex items-center gap-4 text-gray-700 font-medium text-lg w-full focus:outline-none"
            onClick={() => setMobileConnectOpen((open) => !open)}
          >
            <FaFileAlt className="text-2xl" /> Connect
            {mobileConnectOpen ? <FaChevronUp className="ml-auto" /> : <FaChevronDown className="ml-auto" />}
          </button>
          {mobileConnectOpen && (
            <div className="pl-10 flex flex-col gap-3 py-2">
              {connectLinks.map((link, idx) => (
                <a key={idx} href="#" className="text-gray-700 text-base">{link}</a>
              ))}
            </div>
          )}
        </nav>
      </aside>
    </header>
  )
}
