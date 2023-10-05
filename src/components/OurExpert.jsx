import React from "react";
import "../components/OurExpert.css";

export default function OurExpert() {
  return (
    <div className="expert_section">
      <div className="expert-heading">
        <h1>OUR EXPERT</h1>
      </div>

      <div className="OurExpert">
        <div className="expert">
          <div className="expert-image"></div>
          <div className="expert-info">
            <h1>Sachin Sharma</h1>
            The founder of Townscript, later acquired by BookMyShow, is an IIT
            Kanpur alumnus with an aerospace background who had an enriching
            internship at ISRO's Vikram Sarabhai Space Centre. Starting at
            Synygy Inc., he developed a passion for software development and
            achieved viral success with an app garnering 2.5 million installs.
            In his free time, he enjoys reading Nassim Taleb, David Deutsch, and
            Murakami.
          </div>
        </div>

        <div className="expert">
          <div className="expert-image"></div>
          <div className="expert-info">
            <h1>Mahaveer Mutha</h1>
            Mahaveer is a highly experienced IT professional with 12+ years in
            enterprise app development and B2B commerce. He's known for
            innovation, leads the Pune Google Developers Group, advises
            startups, and is a luminary in the IT and startup scene.
          </div>
        </div>
      </div>
    </div>
  );
}
