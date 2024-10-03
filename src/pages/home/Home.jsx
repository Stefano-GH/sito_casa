/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import BG_IMG from "../../images/cover-image.jpg";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  HOME STRUCTURE
  ----------------------------------------
*/
const Home = ( {personData, textStyle} ) => {

    return <section>
        <div className="main-first-container" style={{backgroundImage: `url(${BG_IMG})`}}>
            <svg className="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={COLOR_4} fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>

        <div className="main-second-container" style={{backgroundColor: `${COLOR_4}`}}>
            <h2> Non sei il benvenuto se... </h2>
            <svg className="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={COLOR_3} fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>

        <div className="main-third-container" style={{backgroundColor:`${COLOR_3}`}}></div>
    </section>
}

export default Home;