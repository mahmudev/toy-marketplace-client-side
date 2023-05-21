import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="flex justify-center"
          >
            <img
              src="https://i.ibb.co/NVfCGQX/Untitled-design.png"
              className=" rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
            />
          </div>

          <div data-aos-duration="2000" data-aos="fade-right">
            <h1 className="text-3xl font-bold">
              Welcome to Funko Pop Toys Shop!
            </h1>
            <p className="py-6">
              Discover a world of adorable collectibles and bring your favorite
              characters to life. Unleash your imagination and start your Funko
              Pop adventure today!
            </p>
            <Link to="/all-toys">
              <button className="btn text-white btn-primary">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
