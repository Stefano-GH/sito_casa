/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat,faBroomBall,faScaleBalanced,faFaceSmile,faLightbulb } from "@fortawesome/free-solid-svg-icons";
import BG_IMG from "../../images/cover-image.jpg";

const data = [
    {
        indice: 1,
        categoria: "Regole della Casa",
        colore: "#6EC207",
        icona: faScaleBalanced
    },
    {
        indice: 2,
        categoria: "I Nostri Gatti",
        colore: "#4379F2",
        icona: faCat
    },
    {
        indice: 3,
        categoria: "Fun Fucts",
        colore: "#FF6600",
        icona: faFaceSmile
    },
    {
        indice: 4,
        categoria: "Storia della Nascita dell'Idea",
        colore: "#FCCD2A",
        icona: faLightbulb
    }
];


/*----------------------------------------
  HOME STRUCTURE
  ----------------------------------------
*/
const Home = ( {COLOR_1, COLOR_2, COLOR_3, COLOR_4, textStyle} ) => {    

    return <section>
        <div className="main-first-container" style={{backgroundImage: `url(${BG_IMG})`}}>
            <svg class="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF4EA" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
        </div>

  


        <div className="main-second-container" style={{backgroundColor: `${COLOR_4}` }}>
           <h2> Non sei il benvenuto se... </h2>
            <svg class="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="white" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
    
        </div>

        <div className="main-third-container">
        </div>
    </section>
}

export default Home;