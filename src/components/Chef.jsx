import React from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  return (
    <div className="mt-10 px-3 md:px-0 mx-auto container">
      <h1 className="text-4xl  text-center font-semibold "> Get Best One</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3  gap-y-4 justify-items-center ">
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
        <ChefCard />
      </div>
    </div>
  );
};

export default Chef;
