import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((value) => setData(value));
  }, []);
  console.log(data);
  return (
    <div className="mt-10 px-3 md:px-0 mx-auto container">
      <h1 className="text-4xl  text-center font-semibold "> Get Best One</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3  gap-y-4 justify-items-center ">
        {data.slice(0, 6)?.map((d) => (
          <ChefCard data={d} key={d.id} />
        ))}
      </div>
    </div>
  );
};

export default Chef;
