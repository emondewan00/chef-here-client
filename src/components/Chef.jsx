import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import Cards from "./cardLoading/Cards";

const Chef = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dragon-news-server-miremon5222-gmailcom.vercel.app/chefs")
      .then((res) => res.json())
      .then((value) => {
        setData(value);
        setLoading(false);
      });
  }, []);

  let content = null;

  if (loading) {
    content = <Cards />;
  } else {
    content = data.slice(0, 6)?.map((d) => <ChefCard data={d} key={d.id} />);
  }

  return (
    <div className="mt-10 px-3 md:px-0 mx-auto container">
      <h1 className="text-6xl text-center text-white"> Get Best One</h1>
      <div className="my-8 grid grid-cols-1 md:grid-cols-3  gap-y-4 justify-items-center ">
        {content}
      </div>
    </div>
  );
};

export default Chef;
