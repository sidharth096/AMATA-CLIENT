import React, { useEffect, useState } from 'react'
import bannerImg1 from '../assets/banner1.png'
import bannerImg2 from '../assets/banner2.png'
import bannerImg3 from '../assets/banner3.png'
import bannerImg1Mobile from '../assets/banner1-mobile.png'
import bannerImg2Mobile from '../assets/banner2-mobile.png'
import bannerImg3Mobile from '../assets/banner3-mobile.png'

const banners = [bannerImg1, bannerImg2, bannerImg3]
const bannersMobile = [bannerImg1Mobile, bannerImg2Mobile, bannerImg3Mobile]
const marqueeText = 'Shop Now & Save More   *   Farm Made   *   100% Organic   *   Made With Love   *   Healthier   *   Holi Sale is Live   *   '

const Banner = () => {
  const [current, setCurrent] = useState(0)

  // Auto-rotate banners every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Handlers for manual navigation
  const prevBanner = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length)
  const nextBanner = () => setCurrent((prev) => (prev + 1) % banners.length)

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#f5f5ef] border-b border-[#bfae9c] text-center py-2 text-sm font-semibold flex items-center justify-center gap-6 z-40" style={{height: '36px'}}>
        <span>📧 Subscribe to our newsletter to get regular offers</span>
        <span>|</span>
        <span>🎁 Get 7% off on your first order - FIRSTPURE7</span>
      </div>
      {/* Banner Carousel */}
      <div className="relative w-full flex items-center justify-center" style={{background: '#f5f5ef', minHeight: '420px'}}>
        {/* Left Arrow */}
        <button onClick={prevBanner} className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg z-10 hidden md:block">
          &#8592;
        </button>
        {/* Banner Images: Mobile and Desktop */}
        <img
          src={bannersMobile[current]}
          alt={`Banner ${current + 1} mobile`}
          className="rounded-2xl shadow-lg object-cover w-[90vw] max-w-5xl h-[180px] xs:h-[220px] sm:h-[260px] block md:hidden transition-all duration-700"
        />
        <img
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          className="rounded-2xl shadow-lg object-cover w-[90vw] max-w-5xl h-[350px] md:h-[420px] hidden md:block transition-all duration-700"
        />
        {/* Right Arrow */}
        <button onClick={nextBanner} className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow-lg z-10 hidden md:block">
          &#8594;
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-primary border-primary' : 'bg-white border-primary'} transition-all`}
            />
          ))}
        </div>
      </div>
      {/* Bottom Marquee */}
      <div className="w-full bg-[#f5f5ef] py-2 overflow-hidden border-t border-[#bfae9c]">
        <div className="whitespace-nowrap animate-marquee text-xl text-[#8a9a5b] font-serif font-semibold flex items-center gap-8">
          {marqueeText.repeat(3)}
        </div>
      </div>
      {/* Marquee animation style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 18s linear infinite;
        }
        .bg-primary {
          background-color: #134e4a !important;
        }
        .text-primary {
          color: #134e4a !important;
        }
        .border-primary {
          border-color: #134e4a !important;
        }
      `}</style>
    </div>
  )
}

export default Banner
