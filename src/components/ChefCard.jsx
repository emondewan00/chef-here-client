import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const ChefCard = () => {
  return (
    <div className="  card-compact w-[360px] bg-gray-50 ">
      <figure>
        <img
          src="/Chef.jpg"
          alt=""
          className="p-4 w-[330px] h-[300px] mx-auto rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl">Jhon Deo</h2>
        <p className="text-xl text-black">
          <span>5 years experiance</span> <span>Recipes:5</span>
        </p>

        <div className="card-actions justify-between border-t pt-2 items-center text-lg">
          <button className="  flex items-center space-x-2  text-xl !px-7">
            <BsFillHandThumbsUpFill /> <span>0</span>
          </button>
          <button className="">View Recipes</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
