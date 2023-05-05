import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChefCard = ({ data }) => {
  const { id, image, name, likes, numRecipes, experience } = data || {};
  return (
    <div className=" card-compact w-[360px] bg-gray-200 rounded card-hover">
      <figure>
        <img
          src={image}
          alt=""
          className="p-4 w-[330px] h-[300px] mx-auto rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl">{name}</h2>
        <p className="text-xl text-black">
          <span>Experience:{experience}</span> <span>Recipes:{numRecipes}</span>
        </p>

        <div className="card-actions justify-between border-t border-gray-500 pt-2 items-center text-lg">
          <button className="  flex items-center space-x-2  text-xl !px-7">
            <BsFillHandThumbsUpFill /> <span>{likes}</span>
          </button>
          <Link
            to={`/recipes/${id}`}
            className="bg-blue-500 p-2 rounded text-white hover:bg-blue-600"
          >
            View Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
