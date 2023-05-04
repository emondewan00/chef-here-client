import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();
  const [loadedData, setLoadedData] = useState({});
  const {
    image,
    name,
    likes,
    numRecipes,
    experience,
    description,
    recipes,
    ingredients,
    cookingMethod,
  } = loadedData || {};
  console.log(ingredients)
  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, []);
  return (
    <div className="container my-10 mx-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 bg-gray-100 rounded justify-around ">
        <div className="my-auto px-4 space-y-2">
          <p className="text-5xl">Name:{name}</p>
          <p className="text-2xl">Experience:{experience}</p>
          <p className="text-2xl">Number of recipes:{numRecipes}</p>
          <p className="text-2xl">Likes:{likes}</p>
          <p className="text-xl">Description:{description}</p>
        </div>
        <div>
          {/* <dvi className="border-r border-2 h-10 w-1 shadow-2xl shadow-pink-300  ">hallo</dvi> */}
        </div>
        <div>
          <img src={image} className="w-[500px]" alt="" />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-center text-5xl">My Recipe</h1>
        <div className="flex gap-x-4 justify-around ">
          {recipes?.map((r) => (
            <div className="my-10  bg-gray-50 rounded px-8 py-4">
              <div className="">
                <div>
                  <h1 className=" my-2 text-center text-3xl">{r}</h1>
                  <h1 className="text-xl mb-2 text-center border-b pb-2">Ingredients</h1>
                  <ol className="list-decimal grid grid-cols-2 gap-2 list-inside">
                    {ingredients?.map((items, idx) => (
                      <li key={idx}>{items}</li>
                    ))}
                  </ol>
                </div>
                <div className="mb-4">
                  <h1 className="text-xl text-center my-4 border-b pb-2">Cooking Method</h1>
                  <ol className="list-decimal grid grid-cols-2 gap-2 list-inside">
                    {cookingMethod.map((method, idx) => (
                      <li key={idx}> {method}</li>
                    ))}
                  </ol>
                </div>
                <div className="card-actions justify-between pt-4 border-t items-center text-lg">
                  <button className=" py-1 text-white  shadow-2xl rounded bg-primary flex items-center space-x-2  text-xl !px-7">
                    <BsFillHandThumbsUpFill /> <span>{likes}</span>
                  </button>
                  <button className="  text-white  shadow-2xl rounded bg-primary flex items-center space-x-2 py-1  text-xl !px-7">
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
