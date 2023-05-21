import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Newsletter from "./Newsletter";
import NewCollection from "./NewCollection";
import Toy from "../shared/card/Toy";
import MostSelling from "./MostSelling";
import ToysGallery from "./ToysGallery";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../hooks/useTitle";
import { Link } from "react-router-dom";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init();
  }, []);

  const [selectedTab, setSelectedTab] = useState(0);
  const [marvelData, setMarvelData] = useState([]);
  const [dcData, setDcData] = useState([]);
  const [starWarsData, setStarWarsData] = useState([]);
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    fetch("https://funko-fanfare.vercel.app/toys/category/marvel")
      .then((response) => response.json())
      .then((data) => setMarvelData(data));

    fetch("https://funko-fanfare.vercel.app/toys/category/dc")
      .then((response) => response.json())
      .then((data) => setDcData(data));

    fetch("https://funko-fanfare.vercel.app/toys/category/star-wars")
      .then((response) => response.json())
      .then((data) => setStarWarsData(data));

    fetch("https://funko-fanfare.vercel.app/toys/category/anime")
      .then((response) => response.json())
      .then((data) => setAnimeData(data));
  }, []);

  return (
    <>
      <div className="hero bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            src="https://m.media-amazon.com/images/I/51lML+ZBXcL._AC_SX679_.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Hero Image"
          />
          <div data-aos-duration="2000" data-aos="fade-right">
            <h1 className="text-5xl font-bold">
              Welcome to our Funko Pop Toys Shop!
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
      <ToysGallery></ToysGallery>
      <h1 className="text-3xl my-16 font-semibold text-black text-center lg:text-4xl">
        By Category
      </h1>

      <Tabs className="container mx-auto">
        <TabList className="flex flex-wrap justify-center">
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
          <Tab
            className={`btn btn-outline ml-4 btn-primary ${
              selectedTab === 2 ? "bg-secondary text-black" : ""
            }`}
            onClick={() => setSelectedTab(3)}
          >
            Anime
          </Tab>
        </TabList>

        <TabPanel>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {marvelData.map((item) => (
              <Toy item={item} key={item._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dcData.map((item) => (
              <Toy item={item} key={item._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {starWarsData.map((item) => (
              <Toy item={item} key={item._id}></Toy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {animeData.map((item) => (
              <Toy item={item} key={item._id}></Toy>
            ))}
          </div>
        </TabPanel>
      </Tabs>
      <MostSelling></MostSelling>
      <Newsletter></Newsletter>
      <NewCollection></NewCollection>
    </>
  );
};

export default Home;
