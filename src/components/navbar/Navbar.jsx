/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";



/*----------------------------------------
  NAVBAR STRUCTURE
  ----------------------------------------
*/
const Navbar = ( {handleLogout, BG_COLOR, FG_COLOR} ) => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const nomeInserito = localStorage.getItem('nome');
    const nome = nomeInserito[0].toUpperCase() + nomeInserito.slice(1);

    // genero il burger menu solo per schermi piccoli
    const handleShowBurgerMenu = () => {
        setShowBurgerMenu(!showBurgerMenu);
    }

    return <nav style={{backgroundColor:`${FG_COLOR}`, color:`${BG_COLOR}`}}>
        <div className={showBurgerMenu ? "nav-left-wrapper show" : "nav-left-wrapper"}>
            <h5 style={{borderTop:`1px solid ${BG_COLOR}`, borderBottom:`1px solid ${BG_COLOR}`}}>Regole della casa</h5>
            <h5 style={{borderTop:`1px solid ${BG_COLOR}`, borderBottom:`1px solid ${BG_COLOR}`}}>I nostri gatti</h5>
            <h5 style={{borderTop:`1px solid ${BG_COLOR}`, borderBottom:`1px solid ${BG_COLOR}`}}>Fun Facts</h5>
            <h5 style={{borderTop:`1px solid ${BG_COLOR}`, borderBottom:`1px solid ${BG_COLOR}`}}>Nascita dell'idea</h5>
        </div>

        <div className="burgerMenu" onClick={handleShowBurgerMenu}>
            &#9776;
        </div>

        <div className="nav-right-wrapper">
            <div onClick={handleLogout}>Ciao {nome}</div>
        </div>
    </nav>
}

export default Navbar;