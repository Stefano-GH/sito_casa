/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect,useState } from "react";
import "./Login.css";

const FULL_TEXT = "Benvenut* in casa De Simone-Tumino";
const SPEED = 75;


/*----------------------------------------
  LOGIN STRUCTURE
  ----------------------------------------
*/
const Login = ( {setIsAuthenticated, BG_COLOR, FG_COLOR} ) => {
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
        const writerInterval = setInterval(() => {
            if (index < FULL_TEXT.length) {
                setText(FULL_TEXT.slice(0, index+1));
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
            localStorage.setItem("nome", nome);
            localStorage.setItem("cognome", cognome);
            setIsAuthenticated(true);
        }
    }

    // gestisco il click sul bottone
    const handleClick = (e) => {
        handleSubmit(e);
    }

    return <div className="login-container" style={{backgroundColor:`${BG_COLOR}`}} >
        <div className="login-wrapper">
            <h2 style={{color:`${FG_COLOR}`}}>{text}</h2>
            {error && <p className="login-error">Attenzione! {error}</p>}
            
            {!isFinished ? (
                <div></div>
            ) : (
                <div>
                    <form id="loginForm">
                    <div>
                        <label style={{color:`${FG_COLOR}`}}>Nome:</label>
                        <input type="nome" value={nome} placeholder="Mario" onChange={(e) => {setNome(e.target.value)}} />
                    </div>
                    <div>
                        <label style={{color:`${FG_COLOR}`}}>Cognome:</label>
                        <input type="cognome" value={cognome} placeholder="Rossi" onChange={(e) => {setCognome(e.target.value)}} />
                    </div>
                    </form>
                    <button type="submit" onClick={(e) => {handleClick(e)}}
                        style={{color:`${FG_COLOR}`, border:`1px solid ${FG_COLOR}`}}>Accedi</button>
                </div>
            )}
            
        </div>
    </div>
}

export default Login;