import React from "react";


// eslint-disable-next-line
const ServicesCard = ({ img }) => {
  // eslint-disable-next-line
  const { description, title, cardImg } = img;
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full card-hover hover:scale-110 transition-all duration-200 delay-300">
      <figure>
        <img src={cardImg} alt="" style={{ height: "200px", width: "100%" }} />
      </figure>
      <div className="card-body">
        <h2 className="text-xl text-center">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
