import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const navigate = useNavigate();

  const url = `http://localhost:5000/added-toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("funko-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyToys(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  return (
    <div className="container h-[100vh] overflow-auto mx-auto">
      <h2 className="text-center py-12 text-5xl">Your toys: {myToys.length}</h2>
    </div>
  );
};

export default MyToys;
