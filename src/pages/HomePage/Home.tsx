import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
const Home = () => {
  const nav = useNavigate();
  const onNav = () => {
    nav("/products");
  };
  return (
    <div>
      <div className="bg">
        <blockquote className="flex flex-col items-start justify-center overflow-hidden">
          <div className="text-6xl text-white mt-80 ml-20">
            Newest Collection
          </div>
          <button
            onClick={onNav}
            type="button"
            className="text-white bg-pink-300 hover:bg-pink-400 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-pink-500 dark:hover:bg-pink-600 focus:outline-none dark:focus:ring-pink-700 ml-20 mt-2"
          >
            Shop Now
          </button>
        </blockquote>
      </div>
    </div>
  );
};

export default Home;
