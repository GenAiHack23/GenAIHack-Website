import React, { useState } from "react";
import "./about-us.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

function AboutUs() {
  return (
    <div className="frame">
      <div className="group2">
        <div className="overlap-group2 text-center ">
          <p className="genai-short-for">
            <ReadMore>
              "GenAI," short for "Generative AI," represents a category of
              artificial intelligence systems capable of autonomously generating
              various forms of content, such as text, images, music, or
              software. These systems leverage advanced techniques like neural
              networks and deep learning to produce creative, realistic, or
              human-like content. GPT-3, the model powering this conversation,
              serves as an example of GenAI, excelling in natural language
              understanding and generation. GenAI finds applications across
              diverse domains, including chatbots, content generation, image
              synthesis, and more, and continues to evolve as a pivotal field in
              AI.
            </ReadMore>
          </p>
          <div className="ellipse" />
          {/* <div className="heading2">About US</div> */}
          <div className="heading text-3xl md:text-5xl lg:text-7xl font-extrabold">
            About US
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
