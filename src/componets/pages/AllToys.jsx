import React, { useEffect, useState } from "react";
import Toy from "../shared/card/Toy";
const AllToys = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products?limit=20")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h5 className="mb-3 text-xl text-center py-6 font-extrabold leading-none sm:text-2xl">
        All Toys
      </h5>
      <div className="mx-auto grid  grid-cols-1 gap-4 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {data.map((item) => (
          <Toy item={item} key={item._id}></Toy>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
