import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Toy from "../shared/card/Toy";

const ToyDetails = () => {
  const toy = useLoaderData();

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products?limit=6")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

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
    <>
      <div className=" container w-full my-20 mx-auto">
        <div className="flex flex-col justify-around overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="p-8 lg:ml-16 lg:mt-14 lg:mb-14 lg:w-1/4 h-full">
            <img src={img} className="object-cover w-full  lg:h-full" />
          </div>

          <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              {toyName}
            </h5>
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white lg:flex-row sm:mx-auto">
              <div className="">
                <table className="table-auto border-collapse border">
                  <thead>
                    <tr>
                      <th className="border p-2 text-center" colSpan="3">
                        Product Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border font-bold p-2">Category:</td>
                      <td className="border font-bold p-2">{category}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Rating:</td>
                      <td className="border font-bold p-2">{Rating}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Quantity:</td>
                      <td className="border font-bold p-2">{quantity}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Brand:</td>
                      <td className="border font-bold p-2">{brand}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Color:</td>
                      <td className="border font-bold p-2">{color}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Weight:</td>
                      <td className="border font-bold p-2">{weight}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Material:</td>
                      <td className="border font-bold p-2">{material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <table className="table-auto border-collapse border">
                  <thead>
                    <tr>
                      <th className="border p-2 text-center" colSpan="3">
                        Seller Info
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border font-bold p-2">Seller:</td>
                      <td className="border font-bold p-2">{sellerName}</td>
                    </tr>
                    <tr>
                      <td className="border font-bold p-2">Email:</td>
                      <td className="border font-bold p-2">{sellerEmail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className=" my-4 text-gray-500">
              <span className="items-center font-extrabold text-gray-600 ">
                Description :
              </span>
              {description}
            </p>

            <div className="flex gap-5  items-center">
              <p className="items-centers text-4xl font-extrabold text-gray-600 ">
                Price: {Price}
              </p>
              <a className="btn btn-primary">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
      <div className=" container w-full my-20 mx-auto overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <h5 className="mb-3 text-xl text-center py-6 font-extrabold leading-none sm:text-2xl">
          You may also like
        </h5>
        <div className="mx-auto grid  grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {data.map((item) => (
            <Toy item={item} key={item._id}></Toy>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
