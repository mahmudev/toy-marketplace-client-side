import React from "react";

const ToysGallery = () => {
  return (
    <div className="container mx-auto">
      <section className="text-gray-700 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"></h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/ZfcjB4P/image.png" alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/Kqs76jp/image.png" alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300 rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/2KmCPrG/image.png" alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300  rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/6ZWKgRV/image.png" alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300  rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/ZYKrJX5/image.png" alt="" />
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-300  rounded-lg">
                <img className="rounded-lg" src="https://i.ibb.co/VYH3mG7/image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToysGallery;
