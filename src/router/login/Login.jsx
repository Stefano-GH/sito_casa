/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect,useState } from "react";
import "./Login.css";
import LoginData from "../../data/LoginData.js";

const FULL_TEXT = "Benvenut*_in casa_De Simone_Tumino";  // usa il carattere _ per indicare dove andare a capo
const SPEED = 75;


/*----------------------------------------
  LOGIN STRUCTURE
  ----------------------------------------
*/
const Login = ( {setIsAuthenticated, COLOR_1, COLOR_2, COLOR_3, COLOR_4,
    textStyle} ) => {

    // gestisco i dati dell'utente
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [error, setError] = useState("");

    // gestisco la frase di benvenuto
    const [text, setText] = useState("");
    const [isFinished, setIsFinished] = useState(false);

    // gestisco la scrittura del testo di benvenuto
    useEffect(() => {
        let index = 0;
        let currentText = [];
        const writerInterval = setInterval(() => {
            if (index < FULL_TEXT.length) {

                if (FULL_TEXT[index] === "_") {
                    currentText.push(<br key={index}/>);
                } else {
                    currentText.push(<span key={index}>{FULL_TEXT[index]}</span>);
                }
                setText([...currentText]);
                index++;

            } else {
                clearInterval(writerInterval);
                setIsFinished(true);
            }
        }, SPEED);

        return () => clearInterval(writerInterval);
    },[]);

    // gestisco il submit del form
    const handleSubmit = (e) => {
        e.preventDefault();

        // validazione semplice
        if (!nome) {
            setError("Inserire il nome");
            return;
        } else if (!cognome) {
            setError("Inserire il cognome");
            return;
        } else {
            var person = null;
            for (var i in LoginData) {
                if (nome === LoginData[i].nome && cognome === LoginData[i].cognome) {
                    person = LoginData[i];
                }
            }

            localStorage.setItem("nome", nome);
            localStorage.setItem("cognome", cognome);
            setIsAuthenticated(true);
            console.log(person);
        }
    }


    return <div className="login-container" style={{backgroundColor:`${COLOR_1}`}}>
        <div className="login-wrapper">
            <h2 style={{...textStyle, color:`${COLOR_2}`}}>{text}</h2>
            {error && <p className="login-error" style={{...textStyle, fontWeight:600}}>Attenzione! {error}</p>}
            
            {!isFinished ? (
                <div></div>
            ) : (
                <div className="login-form-wrapper">
                    <form id="loginForm">
                    <div>
                        <label style={{...textStyle, color:`${COLOR_2}`}}>nome:</label>
                        <input type="nome" value={nome} placeholder="Mario" onChange={(e) => {setNome(e.target.value)}} style={textStyle} />
                    </div>
                    <div>
                        <label style={{...textStyle, color:`${COLOR_2}`}}>cognome:</label>
                        <input type="cognome" value={cognome} placeholder="Rossi" onChange={(e) => {setCognome(e.target.value)}} style={textStyle} />
                    </div>
                    </form>
                    <button type="submit" onClick={(e) => {handleSubmit(e)}}
                        style={{...textStyle, border:`1px solid ${COLOR_2}`, backgroundColor:`${COLOR_2}`}}>accedi</button>
                </div>
            )}
            
        </div>
    </div>
}

export default Login;