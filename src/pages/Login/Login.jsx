import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "../../context/AuthProviders";

const Login = () => {
  const { loading, setLoading, loginUser } = useContext(AuthContext);

  // Login with email password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.confirmPassword.value;

    loginUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
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
            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
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
                <label className="label">
                  <Link className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control">
                {loading ? (
                  <button className="bg-[#FF3811] btn loading border-none">
                    loading
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#FF3811] btn btn-error text-white"
                  >
                    Login
                  </button>
                )}
              </div>
            </form>
            <div className="text-center space-y-4 mt-4">
              <p>Or Login with</p>
              <div className="flex gap-2 justify-center items-center">
                <button className="btn btn-circle btn-outline border-gray-400">
                  <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle btn-outline border-gray-400">
                  <FaGithub></FaGithub>
                </button>
              </div>
              <p>
                <span className="text-gray-600">
                  Don’t have an account yet?
                </span>
                <Link
                  to="/register"
                  className="text-[#FF3811] font-semibold ml-2"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
