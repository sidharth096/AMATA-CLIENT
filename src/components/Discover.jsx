import React, { useState } from 'react'
import product from '../assets/products/product.jpg'
import { FaHeart } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: 'Pure & Organic A2 Gir Cow Ghee',
    image: product,
    badge: 'Best Seller',
    save: '7%',
    coins: 2517,
    variant: '250 ml',
    savings: 'Rs. 51',
    rating: 5,
    ratingCount: 2622,
    oldPrice: 900,
    price: 839,
  },
  {
    id: 2,
    name: 'Wood Pressed Groundnut Oil',
    image: product,
    badge: 'Best Seller',
    save: '33%',
    coins: 795,
    variant: '500ml PET Bottle',
    savings: 'Rs. 135',
    rating: 4,
    ratingCount: 413,
    oldPrice: 400,
    price: 265,
  },
  {
    id: 3,
    name: 'Sharbati Wheat Atta',
    image: product,
    badge: 'Best Seller',
    save: '4%',
    coins: 2010,
    variant: '5 kg',
    savings: 'Rs. 30',
    rating: 5,
    ratingCount: 135,
    oldPrice: 700,
    price: 670,
  },
  {
    id: 4,
    name: 'Raw Jaggery Powder',
    image: product,
    badge: 'Best Seller',
    save: '12%',
    coins: 660,
    variant: '1 kg',
    savings: 'Rs. 30',
    rating: 4,
    ratingCount: 241,
    oldPrice: 250,
    price: 220,
  },
]

const tabs = [
  { label: 'Best Seller', active: true },
  { label: 'Value Saver', active: false },
  { label: 'Recently Released', active: false },
]

const Discover = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="w-full flex justify-center bg-[#f5f5ef] py-8">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow p-8 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6 text-primary tracking-wide">Discover</h2>
        {/* Tabs */}
        <div className="flex gap-8 mb-8 border-b border-gray-200 w-full justify-center">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              className={`pb-2 px-2 text-xl font-medium transition-colors ${activeTab === idx ? 'text-primary border-b-4 border-primary' : 'text-gray-400 border-b-4 border-transparent'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mb-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col overflow-hidden relative">
              {/* Badge */}
              <div className="absolute top-3 left-3 flex items-center z-10">
                <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-tl-lg rounded-bl-lg">{product.badge}</span>
                <span className="bg-primary text-white text-[10px] font-bold px-1 py-1 rounded-tr-lg">Save {product.save}</span>
              </div>
              {/* Product Image */}
              <img src={product.image} alt={product.name} className="w-full h-56 object-contain bg-[#f5f5ef]" />
              {/* Coin Banner */}
              <div className="bg-yellow-400 text-primary text-sm font-semibold px-4 py-2 flex items-center gap-2">
                <span role="img" aria-label="coin">🪙</span> Earn <span className="font-bold">{product.coins} Coins</span> on this product
              </div>
              {/* Product Info */}
              <div className="p-4 flex flex-col flex-1">
                <div className="font-medium text-gray-800 mb-2">{product.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded">Your savings: {product.savings}</span>
                  <select className="bg-gray-100 text-xs px-2 py-1 rounded border-none outline-none">
                    <option>{product.variant}</option>
                  </select>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}><FaHeart/></span>
                  ))}
                  <span className="ml-2 text-gray-500 text-xs font-medium">{product.ratingCount}</span>
                </div>
                {/* Price */}
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-gray-400 line-through text-sm">Rs. {product.oldPrice}.00</span>
                  <span className="text-lg font-bold text-primary">Rs. {product.price}.00</span>
                </div>
                {/* Add to Cart */}
                <button className="mt-auto px-4 py-2 border-2 border-primary text-teal-900 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
        {/* Shop All Button */}
        <button className="px-8 py-2 bg-primary text-white rounded-lg font-bold text-lg tracking-wide shadow hover:bg-teal-800 transition-colors">SHOP ALL</button>
        {/* Custom primary color utility */}
        <style>{`
          .text-primary { color: #134e4a !important; }
          .bg-primary { background-color: #134e4a !important; }
          .border-primary { border-color: #134e4a !important; }
        `}</style>
      </div>
    </section>
  )
}

export default Discover
