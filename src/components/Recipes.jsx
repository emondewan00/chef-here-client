import React from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const { id } = useParams();

  const recipe = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
      ],
      cookingMethod: [
        "1. Cook spaghetti according to package directions.",
        "2. Brown ground beef in a large skillet over medium-high heat.",
        "3. Add onion and garlic to skillet and cook until onion is translucent.",
        "4. Add tomato sauce to skillet and bring to a simmer.",
        "5. Drain spaghetti and add it to the skillet, tossing to coat with the sauce.",
        "6. Serve hot with grated Parmesan cheese.",
      ],
      rating: 4.5,
    },
    {
      id: 2,
      name: "Spaghetti Bolognese",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
      ],
      cookingMethod: [
        "1. Cook spaghetti according to package directions.",
        "2. Brown ground beef in a large skillet over medium-high heat.",
        "3. Add onion and garlic to skillet and cook until onion is translucent.",
        "4. Add tomato sauce to skillet and bring to a simmer.",
        "5. Drain spaghetti and add it to the skillet, tossing to coat with the sauce.",
        "6. Serve hot with grated Parmesan cheese.",
      ],
      rating: 4.5,
    },
    {
      id: 3,
      name: "Spaghetti Bolognese",
      ingredients: [
        "spaghetti",
        "ground beef",
        "tomato sauce",
        "onion",
        "garlic",
      ],
      cookingMethod: [
        "1. Cook spaghetti according to package directions.",
        "2. Brown ground beef in a large skillet over medium-high heat.",
        "3. Add onion and garlic to skillet and cook until onion is translucent.",
        "4. Add tomato sauce to skillet and bring to a simmer.",
        "5. Drain spaghetti and add it to the skillet, tossing to coat with the sauce.",
        "6. Serve hot with grated Parmesan cheese.",
      ],
      rating: 4.5,
    },
  ];

  return (
    <div className="container my-10 mx-auto">
      <div className="flex bg-gray-100 rounded justify-around ">
        <div className="my-auto ">
          <p className="text-5xl">Name:</p>
          <p className="text-2xl"> years of experience</p>
          <p className="text-2xl">number of recipes</p>
          <p className="text-2xl">likes</p>
          <p className="text-xl">description</p>
        </div>
        {/* <div className="border-r "></div> */}
        <span className="border-r border-2 shadow-2xl shadow-pink-400"></span>
        <div>
          <img src="/Chef.jpg" className="w-[500px]" alt="" />
        </div>
      </div>
      <div className="my-12">
        <h1 className="text-center text-5xl">My Recipe</h1>
        <div className="flex gap-x-4 justify-around ">
          {recipe.map((r) => (
            <div key={r.id} className="my-10  bg-gray-50 rounded px-8 py-4">
              <div className="">
                <div>
                  <h1 className=" my-2 text-center text-3xl">{r.name}</h1>
                  <h1 className="text-xl mb-2 text-center">Ingredients</h1>
                  <ol className="list-decimal grid grid-cols-2 gap-x-2 list-inside">
                    {r?.ingredients?.map((items, idx) => (
                      <li key={idx}>{items}</li>
                    ))}
                  </ol>
                </div>
                <div className="mb-4">
                  <h1 className="text-xl text-center my-4">Cooking Method</h1>
                  <ol className=" list-inside">
                    {r?.cookingMethod.map((method, idx) => (
                      <li key={idx}> {method}</li>
                    ))}
                  </ol>
                </div>
                <div className="card-actions justify-between pt-4 border-t items-center text-lg">
                  <button className=" py-1 text-white  shadow-2xl rounded bg-primary flex items-center space-x-2  text-xl !px-7">
                    <BsFillHandThumbsUpFill /> <span>0</span>
                  </button>
                  <button className=" py-1 text-white  shadow-2xl rounded bg-primary flex items-center space-x-2 py-1  text-xl !px-7">View Recipes</button>
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
