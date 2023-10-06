// import React, { useEffect, useState } from "react";
// // import { ReactComponent as WorkIcon } from "../Assets/Images/work.svg";
// // import { ReactComponent as SchoolIcon } from "../Assets/Images/school.svg";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// function Timeline() {
//   let workIconStyles = { background: "#06D6A0" };
//   let schoolIconStyles = { background: "#f9c74f" };

//   //   const [loading, setLoading] = useState(true);

//   //   const [data, setData] = useState([]);

//   //   useEffect(() => {
//   //     Requests.getSchedule().then((res) => {
//   //       setData(res.data);
//   //       setLoading(false);
//   //     });
//   //   }, []);

//   let data = [
//     {
//       title: "Registration Opens",
//       description: "Registration starts from -- to ___ Click here to register ",
//     },
//     {
//       title: "Round 1",
//       description: "Round 1 starts from -- to ___Click here to register ",
//     },
//     {
//       title: "Round 2",
//       description: "Registration starts from -- to ___ Click here to register ",
//     },
//     {
//       title: "Closing Ceremony",
//       description: "Round 1 starts from -- to ___Click here to register ",
//     },
//   ];

//   return (
//     <div className="font-sans text-xl pb-10">
//       <h1
//         className="title text-6xl font-semibold text-center text-white pb-12 mt-8"
//         style={{ fontFamily: "Quicksand" }}
//       >
//         Timeline
//       </h1>
//       <VerticalTimeline>
//         {data.map((event) => {
//           //   let isWorkIcon = event.icon === "work";

//           return (
//             <VerticalTimelineElement
//               //   key={`element${i}`}
//               date={event.date}
//               dateClassName=" text-2xl font-bold text-white"
//               //   iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
//               //   icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
//               contentStyle={{
//                 background: "rgba(0,0,0,0.2)",
//                 color: "#fff",
//                 backdropFilter: "blur(5px)",
//               }}
//               textClassName="font-family"
//               //   contentArrowStyle={{}}
//               className="space-y-4"
//             >
//               <div className="vertical-timeline-element-title pt-1 font-bold text-blue-500 text-2xl border-b mb-4">
//                 {event.title}
//               </div>
//               {/* <div>{event.location}</div> */}
//               <div
//                 className="mx-0 mt-6"
//                 style={{ marginBottom: 20 }}
//                 id="description"
//               >
//                 {event.description}
//               </div>
//             </VerticalTimelineElement>
//           );
//         })}
//       </VerticalTimeline>
//     </div>
//   );
// }

// export default Timeline;

import "react-vertical-timeline-component/style.min.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Fade from "react-reveal/Fade";
import React from "react";
// import experienceData from "../../data/experience.json";

export default function Experience() {
  const data = [
    {
      title: "Registration Opens",
      date: "10 Oct - 20 Oct",
      details: ["Registration starts from -- to ___ Click here to register"],
    },
    {
      title: "Round 1",
      date: "10 Oct - 20 Oct",
      details: ["Registration starts from -- to ___ Click here to register"],
    },
    {
      title: "Round 2",
      date: "10 Oct - 20 Oct",
      details: ["Registration starts from -- to ___ Click here to register"],
    },
    {
      title: "Result",
      date: "10 Oct - 20 Oct",
      details: ["Registration starts from -- to ___ Click here to register"],
    },
  ];

  return (
    <div className="mb-8 mt-20">
      {/* <Fade up>
        <div>
          <h1 className="heading-main mb-8">Experience</h1>
        </div>
      </Fade> */}

      <div className="heading text-center pb-10 text-3xl md:text-5xl lg:text-7xl font-extrabold ">
        Timeline
      </div>

      <VerticalTimeline>
        {data.map((events) => {
          return (
            <VerticalTimelineElement
              style={{
                margin: "2rem",
                padding: "3rem",
                borderRadius: "5rem",
                fontSize: "1rem",
                // width: "300px",
              }}
              className="vertical-timeline-element--education "
              contentStyle={{ background: "#1F2937", color: "purple" }}
              contentArrowStyle={{ borderRight: "7px solid  #1F2937" }}
              date={events.date}
              dateClassName="font-4xl text-white "
              iconStyle={{
                background: "#79155B",
                color: "orange",
              }}
              icon={
                <svg
                  className="mx-auto fill-current text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <path d="M 21.5 4 C 19.585045 4 18 5.5850452 18 7.5 L 18 9 L 9.5 9 C 6.468 9 4 11.467 4 14.5 L 4 35.5 C 4 38.533 6.468 41 9.5 41 L 38.5 41 C 41.532 41 44 38.533 44 35.5 L 44 14.5 C 44 11.467 41.532 9 38.5 9 L 30 9 L 30 7.5 C 30 5.5850452 28.414955 4 26.5 4 L 21.5 4 z M 21.5 7 L 26.5 7 C 26.795045 7 27 7.2049548 27 7.5 L 27 9 L 21 9 L 21 7.5 C 21 7.2049548 21.204955 7 21.5 7 z"></path>
                </svg>
              }
            >
              <div className="flex flex-row justify-between gap-8">
                <h3
                  style={{
                    fontFamily: "'Montserrat', 'sans-serif'",
                    fontSize: "1.5rem",

                    textAlign: "center",
                    // alignItems: "center",
                  }}
                  className="mb-2  text-center text-xl font-bold text-orange-400 "
                >
                  {events.title}
                </h3>
              </div>

              {events.details.map((detail, index) => (
                <p
                  style={{
                    fontFamily: "'Montserrat', 'sans-serif'",
                    fontSize: "1.2rem",
                  }}
                  className=" text-white"
                  key={index}
                >
                  • {detail}
                </p>
              ))}
            </VerticalTimelineElement>
          );
        })}

        {/*  */}
        {/* <VerticalTimelineElement
          iconStyle={{
            background: "#3b82f6",
            color: "#1F2937",
          }}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="mx-auto fill-current text-gray-900"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72z" />
            </svg>
          }
        /> */}
      </VerticalTimeline>
    </div>
  );
}
