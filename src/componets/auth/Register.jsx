import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // validate
    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      toast.error("Please add at least two numbers in your password");
      return;
    } else if (password.length < 6) {
      toast.error("Please add at least 6 characters in your password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        event.target.reset();
        toast.success("User has been created successfully");
        updateUserData(result.user, name, photo);
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="container mx-auto w-full py-16 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white shadow-2xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
            <p
              tabIndex={0}
              className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
            >
              Create your account
            </p>
            <p
              tabIndex={0}
              className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
            >
              Already have an account?
              <Link
                to="/login"
                className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
              >
                {" "}
                login here
              </Link>
            </p>
            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />

              <hr className="w-full bg-gray-400  " />
            </div>
            <form onSubmit={handleRegister}>
              <div>
                <label className="text-sm font-medium leading-none text-gray-800">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full "
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                />
              </div>
              <div className="mt-6  w-full">
                <label className="text-sm font-medium leading-none text-gray-800">
                  Email
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    placeholder="Email Address"
                    className="input input-bordered w-full"
                    type="email"
                    name="email"
                    label="Email Address"
                    required
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
                </div>
              </div>
              <div className="mt-6  w-full">
                <label className="text-sm font-medium leading-none text-gray-800">
                  Photo URL
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    placeholder="photo url"
                    className="input input-bordered w-full"
                    type="text"
                    name="photo"
                    label="photo"
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
                </div>
              </div>
              <div className="mt-6  w-full">
                <label
                  htmlFor="pass"
                  className="text-sm font-medium leading-none text-gray-800"
                >
                  Password
                </label>
                <div className="relative flex items-center justify-center">
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered w-full "
                    name="password"
                    label="Password"
                    variant="outlined"
                    required
                  />
                  <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  role="button"
                  type="submit"
                  variant="contained"
                  className="btn w-full btn-primary"
                >
                  Create my account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;