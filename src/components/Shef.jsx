import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
const Shef = () => {
  return (
    <div className="mt-10 px-3 md:px-0 mx-auto container">
      <h1 className="text-4xl  text-center font-semibold "> Get Best One</h1>
      <div className="my-8 grid grid-cols-4 justify-items-center ">
        <div className="card border card-compact w-80 bg-gray-50 shadow-xl">
          <figure>
            <img src="/shef1 (1).jpg" alt="" className="p-4 rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name:Jhon Deo</h2>
            <p className="text-lg">
              <span>Experience:5 years</span> <span>Recipes:5</span>
            </p>

            <div className="card-actions justify-between border-t pt-2 items-center text-lg">
              <button className="  flex items-center space-x-2  text-xl !px-7">
                <BsFillHandThumbsUpFill  />{" "}
                <span>0</span>
              </button>
              <button className="">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="card border card-compact w-80 bg-gray-50 shadow-xl">
          <figure>
            <img src="/shef1 (1).jpg" alt="" className="p-4 rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name:Jhon Deo</h2>
            <p className="text-lg">
              <span>Experience:5 years</span> <span>Recipes:5</span>
            </p>

            <div className="card-actions justify-between border-t pt-2 items-center text-lg">
              <button className="  flex items-center space-x-2  text-xl !px-7">
                <BsFillHandThumbsUpFill  />{" "}
                <span>0</span>
              </button>
              <button className="">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="card border card-compact w-80 bg-gray-50 shadow-xl">
          <figure>
            <img src="/shef1 (1).jpg" alt="" className="p-4 rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name:Jhon Deo</h2>
            <p className="text-lg">
              <span>Experience:5 years</span> <span>Recipes:5</span>
            </p>

            <div className="card-actions border-t pt-2 items-center justify-between">
              <button className=" flex items-center space-x-2  text-xl !px-7">
                <BsFillHandThumbsUpFill  />{" "}
                <span>0</span>
              </button>
              <button className=" text-lg">View Recipes</button>
            </div>
          </div>
        </div>
        <div className="card border card-compact w-80 bg-gray-50 shadow-xl">
          <figure>
            <img src="/shef1 (1).jpg" alt="" className="p-4 rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name:Jhon Deo</h2>
            <p className="text-lg">
              <span>Experience:5 years</span> <span>Recipes:5</span>
            </p>

            <div className="card-actions justify-between border-t pt-2 items-center text-lg">
              <button className="  flex items-center space-x-2  text-xl !px-7">
                <BsFillHandThumbsUpFill  />{" "}
                <span>0</span>
              </button>
              <button className="">View Recipes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shef;
