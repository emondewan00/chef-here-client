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
    fetch(`https://dragon-news-server-miremon5222-gmailcom.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadedData(data));
  }, []);
  return (
    <div className="container my-10 mx-auto">
      <div className="grid md:grid-cols-3 gap-y-8 grid-cols-1 bg-gray-100 rounded justify-around ">
        <div className="md:my-auto px-4 space-y-2 mt-4 ">
          <p className="text-5xl">Name:{name}</p>
          <p className="text-2xl">Experience:{experience}</p>
          <p className="text-2xl">Number of recipes:{numRecipes}</p>
          <p className="text-2xl">Likes:{likes}</p>
          <p className="text-xl">Description:{description}</p>
        </div>
        <div >
          {/* <dvi className="border-r border-2 h-screen shadow-2xl shadow-pink-300"></dvi> */}
        </div>
        <div>
          <img src={image} className="w-[500px]" alt="" />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-center text-5xl">My Recipe</h1>
        <div className="flex flex-col md:flex-row gap-x-4 px-4 md:px-0 justify-around items-center">
          {recipes?.map((r) => (
            <div className="my-4 md:my-10  bg-gray-50 rounded px-4 py-4">
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
