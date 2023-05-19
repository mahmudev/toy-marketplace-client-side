import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Toy from "../shared/card/Toy";

const MostSelling = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products?limit=4")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div data-aos-duration="2000" data-aos="fade-up">
      <h1 className="text-3xl my-10 font-semibold text-black text-center lg:text-4xl">
        Most Selling
      </h1>
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item) => (
          <Toy item={item} key={item._id}></Toy>
        ))}
      </div>
    </div>
  );
};

export default MostSelling;
