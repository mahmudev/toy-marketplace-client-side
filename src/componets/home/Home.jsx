import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import NewCollection from "./NewCollection";
import MostSelling from "./MostSelling";
const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [marvelData, setMarvelData] = useState([]);
  const [dcData, setDcData] = useState([]);
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/category/marvel")
      .then((response) => response.json())
      .then((data) => setMarvelData(data));

    fetch("http://localhost:5000/products/category/dc")
      .then((response) => response.json())
      .then((data) => setDcData(data));

    fetch("http://localhost:5000/products/category/star-wars")
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));
  }, []);

  return (
    <div>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://m.media-amazon.com/images/I/51lML+ZBXcL._AC_SX679_.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to our Funko Pop Toys Shop!
            </h1>
            <p className="py-6">
              Discover a world of adorable collectibles and bring your favorite
              characters to life. Unleash your imagination and start your Funko
              Pop adventure today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div></div>

      <Tabs className="container mx-auto">
        <TabList className="flex justify-center">
          <Tab
            className={`btn btn-outline btn-primary ${
              selectedTab === 0 ? "bg-secondary text-black" : ""
            }`}
            onClick={() => setSelectedTab(0)}
          >
            Marvel
          </Tab>
          <Tab
            className={`btn btn-outline mx-4 btn-primary ${
              selectedTab === 1 ? "bg-secondary text-black" : ""
            }`}
            onClick={() => setSelectedTab(1)}
          >
            DC
          </Tab>
          <Tab
            className={`btn btn-outline btn-primary ${
              selectedTab === 2 ? "bg-secondary text-black" : ""
            }`}
            onClick={() => setSelectedTab(2)}
          >
            Star Wars
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {marvelData.map((item) => (
              <div
                key={item._id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
              >
                <div>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={item.img} className="h-80 w-full" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-slate-400">
                        {item.Rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{item.toyName}</h2>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">$850</p>
                      <div className="flex items-center space-x-1.5 rounded-lg btn btn-primary px-4 py-1.5 text-white duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>

                        <Link to={`toy/${item._id}`}>
                          {" "}
                          <button className="text-sm">View Details</button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dcData.map((item) => (
              <div
                key={item._id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
              >
                <div>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={item.img} className="h-80 w-full" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-slate-400">
                        {item.Rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{item.toyName}</h2>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">$850</p>
                      <div className="flex items-center space-x-1.5 rounded-lg btn btn-primary px-4 py-1.5 text-white duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>

                        <Link to={`toy/${item._id}`}>
                          {" "}
                          <button className="text-sm">View Details</button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {starWarsData.map((item) => (
              <div
                key={item._id}
                className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 "
              >
                <div>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={item.img} className="h-80 w-full" />
                    <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm text-slate-400">
                        {item.Rating}
                      </span>
                    </div>
                  </div>
                  <div className="mt-1 p-2">
                    <h2 className="text-slate-700">{item.toyName}</h2>
                    <div className="mt-3 flex items-end justify-between">
                      <p className="text-lg font-bold text-blue-500">$850</p>
                      <div className="flex items-center space-x-1.5 rounded-lg btn btn-primary px-4 py-1.5 text-white duration-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>

                        <Link to={`toy/${item._id}`}>
                          {" "}
                          <button className="text-sm">View Details</button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
  <MostSelling></MostSelling>
      <Newsletter></Newsletter>
      <NewCollection></NewCollection>
    </div>
  );
};

export default Home;
