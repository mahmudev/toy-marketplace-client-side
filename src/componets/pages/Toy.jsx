import React from "react";
import { useLoaderData } from "react-router-dom";
const Toy = () => {
  const toy = useLoaderData();
  const {
    _id,
    toyName,
    img,
    sellerName,
    sellerEmail,
    category,
    Price,
    Rating,
    quantity,
    description,
    brand,
    color,
    weight,
    material,
  } = toy;
  return (
    <div className=" w-full my-20 mx-auto">
      <div className="flex flex-col max-w-screen-lg justify-between overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="p-8 lg:ml-16 lg:mt-14 lg:w-1/3 h-full">
          <img
            src={img}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>

        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {toyName}
          </h5>
          <p className=" text-gray-900">: {sellerName}</p>
          <p className=" text-gray-900">: {quantity}</p>
          <p className="mb-5 text-gray-900">: {Rating}</p>

          <p className=" text-gray-500">{description}</p>

          <div className="flex gap-5 mt-8 items-center">
            <a target="_blank" className="btn btn-primary">
              Buy Now
            </a>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {Price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
