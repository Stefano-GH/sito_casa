/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./GioHome.css";
import BG_IMG from "../../../data/images/gio-image.jpg"
import { frasiBenvenuto } from "../../../data/GioData.js";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_3 = `#${process.env.REACT_APP_COLOR_3}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  HOME STRUCTURE
  ----------------------------------------
*/
const GioHome = () => {

    return <section>
        <div className="main-first-container" style={{backgroundImage: `url(${BG_IMG})`}}></div>

        <div className="main-second-container" style={{ backgroundColor: `${COLOR_4}`, padding:'5em 0.3em 5em 0.3em' }}>
            <h2 style={{ fontSize:'1.7em', marginBottom:'0.5em', color:`${COLOR_1}` }}>
                Qualche avvertenza
            </h2>
            {frasiBenvenuto.map((item,index) => (
                <div key={index} style={{ display:'flex', fontSize:'1.2em', fontWeight:'400', marginBottom:'0.5em', color:`${COLOR_1}` }}>
                    <p style={{ margin:'0 0.3em 0 0.5em', textAlign:'center' }}>
                        - {item}
                    </p>
                </div>
            ))}
        </div>
    </section>
}

export default GioHome;