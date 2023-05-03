import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const LogWithEmailAndPass = () => {
  const { loginWithGoogle, logInEmailAndPass } = useContext(AuthContext);

  const googleLog = () => {
    loginWithGoogle();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const element = event.target.elements;
    let value = {};
    for (let x of element) {
      value[x.name] = x.value;
    }
    delete value[""];
    console.log(value);
    logInEmailAndPass(value.email, value.password);
  };

  return (
    <div className="md:w-1/4  px-4 mt-10 md:mt-32 md:px-0 mx-auto">
      <div className="card border my-auto shadow-xl shadow-purple-200 bg-gray-100 p-10">
        <h1 className="card-title pb-4 text-center mx-auto  font-bold">
          Login your account
        </h1>
        <hr />
        <div className="my-8 grid grid-cols-2 gap-2">
          <button
            className="my-btn  ease-linear delay-300 duration-700 hover:shadow-xl  transition-all hover:shadow-pink-300  hover:bg-gray-800 hover:text-white shadow-lg "
            onClick={googleLog}
          >
            <FaGoogle className="me-2" />
            Google{" "}
          </button>
          <button className="my-btn">Github </button>
        </div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
        <form className="" onSubmit={submitHandler}>
          <label htmlFor="email" className="text-xl  font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            // {...register("email")}
            placeholder="Enter your email"
            className="form-control  w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow-xl shadow-purple-200"
          />
          <label htmlFor="password" className="text-xl font-semibold ">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            // {...register("password")}
            placeholder="Enter your password"
            className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow-xl shadow-purple-200"
          />
          <button type="submit" className="btn btn-active w-full">
            Login
          </button>
          <p className="text-center mt-2 text-lg font-semibold">
            Don&#39;t Have An Account?{" "}
            <Link
              to="/register"
              className="text-blue-500 underline-offset-4 underline decoration-blue-500 decoration-2"
            >
              Register
            </Link>
            <br />
            <span
              // onClick={forgotHandler}
              className="cursor-pointer underline-offset-4 underline decoration-blue-500 decoration-2"
            >
              Forgot passwort
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogWithEmailAndPass;
