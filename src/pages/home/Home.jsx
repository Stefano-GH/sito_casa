/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Home.css";
import BG_IMG from "../../images/cover-image.jpg";
import { frasiBenvenuto } from "../../data/MainData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import regole_img from "../../images/regole.jpeg"

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  HOME STRUCTURE
  ----------------------------------------
*/
const Home = ( {personData} ) => {

    return <section>
        <div className="main-first-container" style={{backgroundImage: `url(${BG_IMG})`}}>
            {/*
            <svg className="wave-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={COLOR_4} fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>*/}
        </div>

        <div className="main-second-container" style={{ backgroundColor: `${COLOR_4}`, padding:'5em 0.3em 5em 0.3em' }}>
            <h2 style={{ fontSize:'1.7em', marginBottom:'0.5em', color:`${COLOR_1}` }}> <b style={{color:`${COLOR_3}`}}>Non</b> sei il benvenuto se... </h2>
            {frasiBenvenuto.map((item, index) => (
                <div key={index} style={{ display:'flex', fontSize:'1.2em', fontWeight:'400', marginBottom:'0.5em', color:`${COLOR_1}` }}>
                    <p style={{ margin:'0 0.3em 0 0.5em', textAlign:'center' }}><FontAwesomeIcon icon={item.icon} style={{ color:`${COLOR_3}` }}/> {item.frase} <b style={{ color:`${COLOR_3}` }}>{item.bold}</b></p>
                </div>
            ))}
            {/*}
            <svg className="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill={COLOR_3} fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,186.7C640,171,800,117,960,112C1120,107,1280,149,1360,170.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>*/}
        </div>

        <div className="main-third-container" style={{backgroundColor:`${COLOR_3}`}}>
            <div className="card-container">
                <div className="card" style={{ backgroundColor:`${COLOR_4}`, border:`1px solid ${COLOR_4}` }}>
                    <div className="img-card" style={{backgroundImage:`url(${regole_img})`}}></div>

                    <div className="text-card">
                        <p style={{color:`#3C3D37`}}>regole della casa</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Home;