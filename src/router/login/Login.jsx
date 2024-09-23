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
const Login = ( {setIsAuthenticated} ) => {
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
    const handleSubmit = async(e) => {
        e.preventDefault();

        // validazione semplice
        if (!nome) {
            setError("Inserire il nome");
            return;
        } else if (!cognome) {
            setError("Inserire il cognome");
            return;
        }

    }

    return <div className="login-container" >
        <div className="login-wrapper">
            <h2>{text}</h2>
            {error && <p className="login-error">{error}</p>}
            
            {!isFinished ? (
                <div></div>
            ) : (
                <div>
                    <form id="loginForm">
                    <div>
                        <label>Nome:</label>
                        <input type="nome" value={nome} placeholder="Mario" onChange={(e) => {setNome(e.target.value)}} />
                    </div>
                    <div>
                        <label>Cognome:</label>
                        <input type="cognome" value={cognome} placeholder="Rossi" onChange={(e) => {setCognome(e.target.value)}} />
                    </div>
                    </form>
                    <button type="submit" onClick={(e) => {handleSubmit(e)}}>Accedi</button>
                </div>
            )}
            
        </div>
    </div>
}

export default Login;