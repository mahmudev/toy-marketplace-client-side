import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Logout success.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="mx-auto md:px-60 flex justify-between py-3 navbar bg-secondary text-black z-30 sticky top-0 left-0 right-0">
      <Link to="/" className="text-xl md:text-2xl font-bold">
        <img src="https://i.ibb.co/HYx3TJD/dddd.png" className="w-40" />
      </Link>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>

        <ul
          tabIndex={0}
          className="menu menu-compact text-black bg-white dropdown-content mt-3 p-2 shadow rounded-box w-52"
        >
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-toys" activeClassName="active">
              All Toys
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink to="/my-toys" activeClassName="active">
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink to="/add-toys" activeClassName="active">
                  Add Toys
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/blogs" activeClassName="active">
              Blogs
            </NavLink>
          </li>
          {user ? (
            <li>
              <button onClick={handleLogOut} className="btn btn-primary">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login" className="btn btn-secondary">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>

      <ul className="hidden lg:flex gap-10 items-center">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-toys" activeClassName="active">
            All Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/blogs" activeClassName="active">
            Blogs
          </NavLink>
        </li>
        {user && (
          <>
            <li>
              <NavLink to="/my-toys" activeClassName="active">
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink to="/add-toys" activeClassName="active">
                Add Toys
              </NavLink>
            </li>
            <li>
              <div
                className="w-10 h-10 rounded-full overflow-hidden"
                title={user.displayName}
              >
           
                  <img
                    className="hover:cursor-pointer"
                    src={
                      user.photoURL ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                    }
                    alt={
                      user.displayName
                        ? `${user.displayName}'s profile picture`
                        : "Default profile picture"
                    }
                  />
           
              </div>
            </li>
          </>
        )}
        {user ? (
          <li>
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
