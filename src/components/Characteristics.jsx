import React from "react";
import "./chars.css";
import Card from "./Card";

export const Characteristics = () => {
  const characteristics = [
    {
      id: 1,
      title: "Foster Innovation",
      description:
        "They provide a platform for participants to enhance their AI and coding skills, learn from peers, and gain practical experience.",
    },
    {
      id: 2,
      title: "Skill Development",
      description:
        "They provide a platform for participants to enhance their AI and coding skills, learn from peers, and gain practical experience.",
    },
    {
      id: 3,
      title: "Address Real",
      description:
        "Challenge participants to create AI solutions for real-world problems or generate valuable content.",
    },
  ];

  const characteristics2 = [
    {
      id: 4,
      title: "Cross-Generation Learning",
      description:
        "Promote collaboration between college students and corporate professionals to bridge the gap between academia and industry.",
    },
    {
      id: 5,
      title: "Raise Ethical Awareness",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  //
  return (
    <>
      <div className="lg:flex lg:justify-center">
        <div className="chars-div  mb-24 text-center lg:w-11/12  p-10">
          <div className="heading text-3xl md:text-5xl lg:text-7xl font-extrabold ">
            Characteristics
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center lg:space-x-5 mt-14 ">
            {characteristics.map((char) => {
              return (
                <Card
                  key={char.id}
                  title={char.title}
                  description={char.description}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-center lg:space-x-5 pt-16">
            {characteristics2.map((char) => {
              return (
                <Card
                  key={char.id}
                  title={char.title}
                  description={char.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
