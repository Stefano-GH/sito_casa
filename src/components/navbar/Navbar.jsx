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
const Navbar = ( {handleLogout, COLOR_1, COLOR_2, COLOR_3, COLOR_4, textStyle} ) => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
    const nomeInserito = localStorage.getItem('nome');
    const nome = nomeInserito[0].toUpperCase() + nomeInserito.slice(1);

    ////////////////////
    // Burger Menu
    ////////////////////
    // gestione del condizionamento
    const [burgerMenuHover, setBurgerMenuHover] = useState(false);

    // stile condizionato del lato sinistro
    const burgerMenuStyle = {
        backgroundColor: `${COLOR_1}`,
        color: burgerMenuHover ? `${COLOR_2}` : `${COLOR_4}`,
        cursor: burgerMenuHover ? "pointer" : "default",
        display: "block",
        fontSize: "35px",
        fontWeight: "bold"
    }

    ////////////////////
    // Nav Right Wrapper
    ////////////////////
    // gestione del condizionamento
    const [navRightWrapperHovered, setNavRightWrapperHovered] = useState(false);

    // stile condizionato del lato destro
    const navRightWrapperStyle = {
        color: navRightWrapperHovered ? `${COLOR_2}` : `${COLOR_4}`,
        cursor: navRightWrapperHovered ? "pointer" : "default",
        fontSize: "27px",
        margin: "0px",
        padding: "0px",
        textAlign: "center",
        width: "45%"
    }

    ////////////////////
    // Link
    ////////////////////
    // gestione del condizionamento
    const [linkHovered1, setLinkHovered1] = useState(false);
    const [linkHovered2, setLinkHovered2] = useState(false);
    const [linkHovered3, setLinkHovered3] = useState(false);
    const [linkHovered4, setLinkHovered4] = useState(false);

    // funzione che genera lo stile condizionato dei link
    const getLinkStyle = (linkHovered) => ({
        ...textStyle,
        borderTop: `1px solid ${COLOR_1}`,
        borderBottom: `1px solid ${COLOR_1}`,
        color: linkHovered ? `${COLOR_4}` : `${COLOR_1}`,
        cursor: linkHovered ? "pointer" : "default",
        fontSize: "27px",
        margin: 0,
        padding: "20px",
        textAlign: "center",
        backgroundColor: linkHovered ? `${COLOR_2}` : `${COLOR_4}`
    })


    return <nav style={{backgroundColor:`${COLOR_1}`}}>
        <div className={showBurgerMenu ? "nav-left-wrapper show" : "nav-left-wrapper"}
        style={{backgroundColor: `${COLOR_4}`}}>
            <h5 style={getLinkStyle(linkHovered1)} onMouseEnter={() => setLinkHovered1(true)} onMouseLeave={() => {setLinkHovered1(false)}}>
                Regole della casa
            </h5>
            <h5 style={getLinkStyle(linkHovered2)} onMouseEnter={() => setLinkHovered2(true)} onMouseLeave={() => {setLinkHovered2(false)}}>
                I nostri gatti
            </h5>
            <h5 style={getLinkStyle(linkHovered3)} onMouseEnter={() => setLinkHovered3(true)} onMouseLeave={() => {setLinkHovered3(false)}}>
                Fun Facts
            </h5>
            <h5 style={getLinkStyle(linkHovered4)} onMouseEnter={() => setLinkHovered4(true)} onMouseLeave={() => {setLinkHovered4(false)}}>
                Nascita dell'idea
            </h5>
        </div>

        <div className="burgerMenu" onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        style={burgerMenuStyle} onMouseEnter={() => setBurgerMenuHover(true)} onMouseLeave={() => setBurgerMenuHover(false)}>
            &#9776;
        </div>

        <div className="nav-right-wrapper" style={navRightWrapperStyle}
        onMouseEnter={() => setNavRightWrapperHovered(true)} onMouseLeave={() => setNavRightWrapperHovered(false)}>
            <div onClick={handleLogout}>
                <h4>Ciao <i>{nome}</i></h4>
            </div>
        </div>
    </nav>
}

export default Navbar;