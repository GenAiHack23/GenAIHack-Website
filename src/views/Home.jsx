
import "./home.css";
import { motion } from 'framer-motion';
import Footer from "../components/Footer";
import OurExpert from "../components/OurExpert";
import { Characteristics } from "../components/Characteristics";
import Timeline from "../components/Timeline";

export default function HomeView() {
  return (
    <div>
      <div className="home">
        <div className="overlap">
          <motion.div className="heading" 
          initial={{scale:0, opacity:0}} animate={{scale:1.2, opacity:100}} transition={{type:'tween',delay:0.2, duration: 0.5}}>
            Gen-AI Hackathon 2023
          </motion.div>
          <motion.img className="imgg" alt="Heading" src="src/assets/Heading.svg" 
            initial={{x:-600 ,opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.8,duration:0.5}}
          />
        </div>
        <motion.div className="frame" >
          <motion.div className="overlap-group" initial={{y:300 ,opacity:0}} animate={{y:0,opacity:1}} transition={{type:'tween',delay:1.5}}>
            <div className="group-wrapper">
              <div className="groupp">
                <div className="text-wrapper">sponsor 1</div>
                <div className="div">sponsor 2</div>
                <div className="text-wrapper-2">sponsor 3</div>
                <div className="text-wrapper-3">sponsor 4</div>
                <div className="text-wrapper-4">sponsor 5</div>
                <div className="text-wrapper-5">sponsor 6</div>
              </div>
            </div>
            <div className="heading1">
              <motion.div className="title" >Sponsors</motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* <AboutUs /> */}
      {/* <AboutUs /> */}
      <Characteristics />
      <OurExpert />
      <Timeline />
      <Footer />
    </div>
  );
};