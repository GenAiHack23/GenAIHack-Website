
import "./home.css";
import subheading from "../assets/Heading.svg";
import bg from "../assets/bg.svg";
import logo from "../assets/logoo.svg";
import logo2 from "../assets/logo2.png";
import {motion} from "framer-motion";


const Homee = () => (
  
    <motion.div className="home-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 0.9 }} 
    >
        
       
        <motion.div className="heading-wrapper"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.8 }}
        >
            <div className="heading">Gen-AI Hackathon 2023</div>
            <div className="subheading-w">
               <img className="sub-h" src={subheading} alt="-"/>
            </div>
            
        </motion.div>
        
        <div className="bgimg" style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat" }}>
        <motion.div className="logoo"
        initial={{ opacity: 0, x: 900 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 0.8,delay:0.5 }}
        >
            <img className="img2" src={logo} alt="-" />
        </motion.div>
        </div>
        <motion.div className="log"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1}}
        transition={{ duration: 1.5}}>
            <img className="img3" src={logo2} alt="-" />
        </motion.div>

    </motion.div>
);
export default Homee ;
