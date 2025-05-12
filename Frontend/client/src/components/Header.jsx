import React from "react";
import { assests } from "../assets/assests";
import toast from "react-hot-toast";

const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
      {/* Left Side: video banner */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
          <video
            src={assests.video_banner}
            autoPlay
            loop
            muted
            className="w-full max-w-[400px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right Side: Text */}

      <div className="order-1 md:order-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          The Fastest{" "}
          <span className="text-indigo-700">Background eraser.</span>
        </h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Remove backgrounds from your images instantly with our AI-powered
          tool. Perfect for professionals and individuals, delivering
          seamless results
        </p>

        <div>
          <input type="file" accept="image/*" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="bg-black text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-transform hover:scale-105 text-lg"
          >
            Upload Your Image
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
