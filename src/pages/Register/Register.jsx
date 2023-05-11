import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProviders";

// Blank user image
const photo =
  "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1682183923~exp=1682184523~hmac=7b363a7e2f6de1b8296fe22ea6eaceb24356ca04809ff110b92ad504d0c651d3";

const Register = () => {
  // Context API
  const {
    loading,
    setLoading,
    setAuthStateHandler,
    createUser,
    profileUpdate,
  } = useContext(AuthContext);

  // Registration with email password
  const handleReg = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.confirmPassword.value;

    // Create user
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        form.reset();
        const user = userCredential.user;

        // Update user profile
        profileUpdate(name, photo)
          .then(() => {
            setAuthStateHandler("reRun");
            console.log(user);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="hero md:h-[calc(100vh-96px)]">
      <div className="hero-content flex-col lg:flex-row md:space-x-32">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm rounded-md border">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-4">Sign Up</h1>
            <form onSubmit={handleReg}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                {loading ? (
                  <button className="bg-[#FF3811] btn loading border-none">
                    loading
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#FF3811] btn btn-error text-white"
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </form>
            <div className="text-center space-y-4 mt-4">
              <p>Or Sign In with</p>
              <div className="flex gap-2 justify-center items-center">
                <button className="btn btn-circle btn-outline border-gray-400">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline border-gray-400">
                  <FaGithub></FaGithub>
                </button>
              </div>
              <p>
                <span className="text-gray-600">Already have an account?</span>
                <Link to="/login" className="text-[#FF3811] font-semibold ml-2">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
