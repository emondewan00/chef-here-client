import React from "react";
import Chef from "./Chef";
import Services from "./Services";
import CustomerReview from "./CustomerReview";

const Banner = () => {
  return (
    <>
      <div className="container rounded bg-cover bg-top bg-no-repeat mx-auto bg-[url(/bg-cover.jpg)] w-screen ">
        <div className="backdrop-brightness-50 container mx-auto  w-screen">
          <h1 className=" text-4xl px-3 md:px-0 md:text-7xl text-white md:w-1/2  text-center py-36  m-auto ">
            Meet Shef: Exploring the World Through Food <br />
            <button className="btn btn-outline !text-white  btn-secondary ">
              Here a best shef
            </button>
          </h1>
        </div>
      </div>
      <Chef />
      <Services />
      <CustomerReview />
    </>
  );
};

export default Banner;
