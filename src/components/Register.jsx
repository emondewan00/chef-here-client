import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Register = () => {
  const { emailAndPass } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [image, setImage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      email,
      userName,
      password,
      image,
    });
  };
  return (
    <div className="md:w-1/3  px-4 mt-10 md:mt-32 md:px-0 mx-auto">
      <div className="card border  bg-gray-100 p-10">
        <h1 className="card-title pb-4 text-center mx-auto  font-bold">
          Register Now
        </h1>
        <hr />
        <form className="mt-3" onSubmit={submitHandler}>
          <div>
            <label htmlFor="name" className="text-xl font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Enter your name"
              className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
            />
          </div>
          <div>
            <label htmlFor="file" className="text-xl font-semibold">
              Chose Image
            </label>
            <input
              id="file"
              type="file"
              onChange={(e) => setImage(e.target.value)}
              required
              className="file-input form-control  file-input-bordered file-input-primary  w-full my-3"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xl font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-xl font-semibold ">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              maxLength="12"
              required
              placeholder="Enter your password"
              className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
            />
          </div>
          <div>
            <label htmlFor="confPass" className="text-xl font-semibold ">
              Conform password
            </label>
            <input
              type="password"
              name="confPass"
              id="confPass"
              onChange={(e) => setConfPass(e.target.value)}
              minLength="6"
              maxLength="12"
              required
              placeholder="Enter your conform password"
              className="form-control w-full outline-none p-3 text-lg ring ring-purple-500 my-3 ring-offset-1 rounded-sm shadow"
            />
          </div>
          <button type="submit" className="btn btn-active w-full">
            Register
          </button>
          <p className="text-center mt-2 text-lg font-semibold">
            All Ready Have An Account?{" "}
            <Link to="/login" className="text-red-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
