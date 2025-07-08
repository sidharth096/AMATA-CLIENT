import React from "react";
// Replace with your actual image and icon imports
import manCowImg from "../assets/man-cow.png";
import { FaLeaf, FaHeart, FaWheatAwn, FaSeedling, FaFlask, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";

const features = [
  {
    icon: <FaFlask className="text-3xl" />,
    label: "500+ Acres of Certified Organic Farm/Sources",
  },
  {
    icon: <FaHeart className="text-3xl" />,
    label: "Traditional Methods For Production",
  },
  {
    icon: <FaWheatAwn className="text-3xl" />,
    label: "Free Of Processing to Maintain Nutritional Values",
  },
  {
    icon: <FaSeedling className="text-3xl" />,
    label: "100% Organic Products",
  },
  {
    icon: <FaLeaf className="text-3xl" />,
    label: "No Use Of Chemicals & Preservatives",
  },
];

const reviews = [
  { name: "jaya g", verified: true, text: "You can add yogurt or butter milk as a new products.", rating: 5 },
  { name: "Puja K.", verified: true, text: "I am regular customer of your gir organic ghee..every month I purchase it.", rating: 5 },
  { name: "Kiran L.", verified: true, text: "Tell me How to redeem the points while ordering.", rating: 5 },
  { name: "Ravi S.", verified: true, text: "Excellent quality and fast delivery. Highly recommend!", rating: 5 },
  { name: "Meena T.", verified: true, text: "The taste is pure and authentic. Will buy again.", rating: 4 },
  { name: "Amit P.", verified: true, text: "Customer support was very helpful. Great experience!", rating: 5 },
];

const articles = [
  { image: article1, date: "JUNE 25, 2023", author: "ASHADA TIKKE", title: "Protein Done Right with GirOrganic", desc: "Wellness has become a trend and has taken over our social media feeds these days. It feels like everyone is chasing a healthier version of themselves. Whether it’s signing up..." },
  { image: article2, date: "JUNE 18, 2023", author: "ASHADA TIKKE", title: "The Science and Benefits of Ghee", desc: "There’s something magical about ghee. It’s not just the way it melts and coats your food or the fact that it’s been used in Indian households for generations. Ghee has..." },
  { image: article3, date: "JUNE 18, 2023", author: "ASHADA TIKKE", title: "Living Life Farm Size", desc: "In a world where everything seems to be speeding up, where instant meals, fast internet, and quick fixes are the norm, there’s something satisfying about slowing down. It’s about living..." },
];

const WhoWeare = () => {
  const [reviewIndex, setReviewIndex] = React.useState(0);
  const [autoScroll, setAutoScroll] = React.useState(false);
  const intervalRef = React.useRef(null);

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  React.useEffect(() => {
    if (autoScroll) {
      intervalRef.current = setInterval(() => {
        setReviewIndex((prev) => (prev + 1) % reviews.length);
      }, 2500);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoScroll]);

  // Helper to get 3 visible reviews, wrapping around
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(reviewIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <div className="pb-0 ">
      {/* Top Card */}
      <div className="max-w-7xl mx-auto  rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 mt-8 relative overflow-hidden">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={manCowImg}
            alt="Man with Gir Cow"
            className="rounded-2xl w-full max-w-md h-72 object-cover"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col justify-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-primary">Who we are?</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Since 1990, we at GirOrganic have been bringing to you completely organic products grown and manufactured at our certified organic farm spread over 500+ acres in Surat, Chotta Udaipur. The farming practices followed is completely organic which helps us to deliver you with 100% natural, unprocessed and unadulterated organic products...
          </p>
          {/* Badge */}
          <div className="inline-block bg-yellow-200 text-primary font-bold text-2xl px-8 py-4 rounded-xl shadow mb-2">
            *100% <br />
            <span className="text-xs font-medium">A2 milk from Gir cows</span>
          </div>
        </div>
      </div>

      {/* Slanted Divider */}
      <div className="w-full h-12 -mt-2" style={{ background: "linear-gradient(105deg, #ffffff 60%, #134e4a 0)" }} />

      {/* Features Row */}
      <div className="bg-[#134e4a] py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex flex-col items-center text-center text-yellow-200 w-40">
              <div className="bg-yellow-200 text-[#134e4a] rounded-full w-14 h-14 flex items-center justify-center mb-3 shadow-lg">
                {f.icon}
              </div>
              <span className="text-xs font-semibold text-yellow-200">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto py-12 ">
        <h2 className="text-2xl font-bold text-primary mb-2 text-center">What Do Our Customers Say</h2>
        <div className="text-center font-semibold text-lg mb-8">
          Let customers speak for us
          <div className="text-xs font-normal text-gray-500">from 5508 reviews</div>
        </div>
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <FaChevronLeft />
          </button>
          {/* 3 Review Cards */}
          {getVisibleReviews().map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow border border-gray-100 min-w-[250px] max-w-xs p-6 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <div className="font-bold mb-1 text-sm">
                {review.name}{" "}
                {review.verified && (
                  <span className="bg-gray-200 text-[10px] px-2 py-0.5 rounded ml-1 font-normal">
                    Verified
                  </span>
                )}
              </div>
              <div className="text-gray-700 text-center text-sm mb-6">{review.text}</div>
              <div className="text-[10px] text-gray-400 mt-auto">GIROrganic</div>
            </div>
          ))}
          {/* Right Arrow */}
          <button
            onClick={nextReview}
            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
            aria-label="Next review"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Recent Articles Section */}
      <div className="w-full bg-white py-12 mt-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow border border-gray-100 flex flex-col overflow-hidden min-h-[380px]">
                <div className="p-2 pb-0">
                  <img src={article.image} alt={article.title} className="w-full h-52 object-cover rounded-xl" />
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-2">
                    <span>{article.date}</span>
                    <span>🖊️ {article.author}</span>
                  </div>
                  <div className="font-bold text-base mb-1">{article.title}</div>
                  <div className="text-gray-600 text-sm mb-4">{article.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm tracking-wide shadow hover:bg-teal-800 transition-colors">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeare;
