
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="overlap">
                <div className="heading">Gen-AI Hackathon 2023</div>
                <img className="img" alt="Heading" src="src/assets/Heading.svg" />
            </div>
            <div className="frame">
                <div className="overlap-group">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="text-wrapper">sponsor 1</div>
                            <div className="div">sponsor 2</div>
                            <div className="text-wrapper-2">sponsor 3</div>
                            <div className="text-wrapper-3">sponsor 4</div>
                            <div className="text-wrapper-4">sponsor 5</div>
                        </div>
                    </div>
                    <div className="heading1">
                    <div className="title">Sponsors</div></div>
                </div>
            </div>
        </div>
    );
};
export default Home ;