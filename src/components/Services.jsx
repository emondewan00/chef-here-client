import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const servicesCard = [
    {
      id: 1,
      cardImg: "/services.jpg",
      title: "24/7 Services",
      description:
        "Professional chef services for personalized culinary experiences, from intimate dinners to large events.",
    },
    {
      id: 2,
      cardImg: "/health.jpg",
      title: "Healthy food",
      description:
        "Healthy and nutritious food options designed to support overall wellness and a balanced diet.",
    },
    {
      id: 3,
      cardImg: "/good.jpg",
      title: "Good quality",
      description:
        "Easy-to-follow recipes with clear instructions and delicious results, perfect for cooks of all levels.",
    },
    {
      id: 4,
      cardImg: "/services.jpg",
      title: "Personal Chef Services",
      description:
        "Customized meal planning and preparation in the comfort of your own home, catered to your unique tastes.",
    },
  ];
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-6xl text-center text-white">Our Services</h1>
      <div className="flex  flex-col md:flex-row  justify-between gap-y-4  items-center mt-6 md:gap-x-4 ">
        {servicesCard.map((card) => (
          <ServicesCard key={card.id} img={card} />
        ))}
      </div>
    </div>
  );
};

export default Services;
