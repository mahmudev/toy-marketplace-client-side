import React from "react";

const ToysGallery = () => {
  return (
    <div  data-aos-duration="2000" data-aos="fade-up" className="container mx-auto">
        <h1 className="text-3xl my-16 font-semibold text-black text-center lg:text-4xl">
        Latest Toys
      </h1>
      <div className="flex my-10 flex-wrap items-center justify-center gap-6">
        <div className="border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/ZfcjB4P/image.png"
            alt=""
          />
        </div>

        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/Kqs76jp/image.png"
            alt=""
          />
        </div>

        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/6ZWKgRV/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/ZYKrJX5/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/VYH3mG7/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/7zGjHQp/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/59Z1vcV/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/931F7H7/image.png"
            alt=""
          />
        </div>
        <div className=" border hover:shadow-xl hover:transform hover:scale-105 duration-300">
          <img
            className="h-60 w-60"
            src="https://i.ibb.co/NpB8fjV/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
