import React from "react";
import { testimonials } from "../assets/assests";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-12">
      {/* title section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        They love us. You will too.
      </h2>

      {/* body section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-quote-icon lucide-quote"
              >
                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
              </svg>
              <p className="text-gray-700 m-0" style={{ hyphens: "auto" }}>
                {testimonial.quote}
              </p>
            </div>
            <div className="flex space-x-2 bg-gray-50 px-6 pt-6 pb-5 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 m-0">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm m-0 mt-1">
                  {testimonial.handle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
