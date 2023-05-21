import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("All-Toy");
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setError(false);
    const apiUrl =
      searchQuery.trim() !== ""
        ? `https://funko-fanfare.vercel.app/toys/toy-name/${searchQuery}`
        : `https://funko-fanfare.vercel.app/toys?page=${currentPage}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [searchQuery, currentPage]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <h5 className="mb-3 text-xl text-center py-6 font-extrabold leading-none sm:text-2xl">
        All Toys
      </h5>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search toys"
          className="block border-b-2 bg-base-100 text-center  border-blue-500 w-full lg:w-1/2 px-4 py-2 text-lg focus:border-blue-600 focus:outline-none"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto w-full">
        {error && (
          <div className="text-red-500 text-center mb-6">
            Error occurred while fetching data.
          </div>
        )}
        {!error && (
          <div className="mx-auto">
            {data?.length === 0 ? (
              <div className="text-center mb-6 text-xl font-bold ">
                No results found.
              </div>
            ) : (
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price $</th>
                    <th>Seller Name</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((toy) => (
                    <tr key={toy._id}>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="rounded w-12 h-20s">
                              <img src={toy?.img} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className=" text-xl font-bold text-gray-600">
                          {toy?.toyName}
                        </p>
                      </td>
                      <td>
                        <p className=" text-xl font-bold text-gray-600">
                          {toy?.quantity}
                        </p>
                      </td>
                      <td>
                        <p className=" text-xl font-bold text-gray-600">
                          {toy?.Price}
                        </p>
                      </td>
                      <td>
                        <p className=" text-xl font-bold text-gray-600">
                          {toy?.sellerName}
                        </p>
                      </td>
                      <td>
                        <p className=" text-xl font-bold text-gray-600">
                          {toy?.category}
                        </p>
                      </td>
                      <th>
                        <div className="flex  gap-4">
                          <Link to={`/toy/${toy?._id}`}>
                            <button className="btn btn-primary">Details</button>
                          </Link>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center my-10">
        <button
          className="px-4 btn btn-primary py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md mr-2"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 btn btn-primary py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllToys;
