import React from "react";
import "./chars.css";
import Card from "./Card";

export const Characteristics = () => {
  const characteristics = [
    {
      title: "Foster Innovation",
      description:
        "Hackathons encourage participants to push the boundaries of generative AI technology, leading to new ideas and creative solutions.",
    },
    {
      title: "Skill Development",
      description:
        "They provide a platform for participants to enhance their AI and coding skills, learn from peers, and gain practical experience.",
    },
    {
      title: "Address Real",
      description:
        "Challenge participants to create AI solutions for real-world problems or generate valuable content.",
    },
  ];

  const characteristics2 = [
    {
      title: "Cross-Generation Learning",
      description:
        "Promote collaboration between college students and corporate professionals to bridge the gap between academia and industry.",
    },
    {
      title: "Raise Ethical Awareness",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  //
  return (
    <>
      <div className="chars-div mb-24">
        <div className="heading">Characteristics</div>

        <div className="flex space-x-5 mt-14">
          {characteristics.map((char) => {
            return (
              <div>
                <Card title={char.title} description={char.description} />
              </div>
            );
          })}
        </div>

        <div className="flex space-x-5 pt-16">
          {characteristics2.map((char) => {
            return (
              <div>
                <Card title={char.title} description={char.description} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
