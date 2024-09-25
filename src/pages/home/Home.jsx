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
const Home = () => {    

    return <section>
        <div className="main-first-container" style={{backgroundImage: `url(${BG_IMG})`}}></div>

        <div className="main-second-container">
            <h2>Non sei il benvenuto se:</h2>
            <ul>
                <li><FontAwesomeIcon icon={faCat}/> Non ami i gatti</li>
                <li><FontAwesomeIcon icon={faBroomBall}/> Non ami Harry Potter</li>
            </ul>
        </div>

        <div className="main-third-container">
            {data.map(item => (
                <div key={item.indice} className="main-card" style={{backgroundColor:`${item.colore}`}}>
                    <div><FontAwesomeIcon icon={item.icona}/></div>
                    <p>{item.categoria}</p>
                </div>
            ))}
        </div>
    </section>
}

export default Home;