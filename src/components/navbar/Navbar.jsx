/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navLinks as links } from "../../data/MainData";

const COLOR_1 = `#${process.env.REACT_APP_COLOR_1}`;
const COLOR_2 = `#${process.env.REACT_APP_COLOR_2}`;
const COLOR_4 = `#${process.env.REACT_APP_COLOR_4}`;


/*----------------------------------------
  NAVBAR STRUCTURE
  ----------------------------------------
*/
const Navbar = ( {isSmall, personData, handleLogout} ) => {
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
    }

    ////////////////////
    // Nav Right Wrapper
    ////////////////////
    // gestione del condizionamento
    const [navRightWrapperHovered, setNavRightWrapperHovered] = useState(false);

    // stile condizionato del lato destro
    const navRightWrapperStyle = {
        color: navRightWrapperHovered ? `${COLOR_2}` : `${COLOR_4}`,
    }

    ////////////////////
    // Link
    ////////////////////
    const location = useLocation();
    const currentPath = location.pathname;
    // generazione hover dinamici
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // funzioni per la gestione dell'hover
    const handleMouseEnter = (index) => setHoveredIndex(index);

    const handleMouseLeave = () => setHoveredIndex(null);

    // funzione che genera lo stile condizionato dei link
    const getLinkStyle = (index) => ({
        borderTop: `1px solid ${COLOR_1}`,
        color: isSmall ? (index === hoveredIndex ? `${COLOR_4}` : `${COLOR_1}`) : (index === hoveredIndex ? `${COLOR_2}` : `${COLOR_4}`),
        backgroundColor: isSmall ? (index === hoveredIndex ? `${COLOR_2}` : `${COLOR_4}`) : (`${COLOR_1}`),
        cursor: index === hoveredIndex ? "pointer" : "default",
        width: "100%"
    })


    return <nav style={{backgroundColor:`${COLOR_1}`}}>
        <div className={showBurgerMenu ? "nav-left-wrapper show" : "nav-left-wrapper"} style={{backgroundColor: isSmall ? `${COLOR_4}` : `${COLOR_1}`}}>
            {links.map((item, index) => (
                <NavLink key={index} className="nav-link" style={getLinkStyle(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    to={currentPath === item.to ? "/sito_casa" : item.to}
                >
                    {currentPath === item.to ? "Home" : item.titolo}
                </NavLink>
            ))}
        </div>

        <div className="burgerMenu" role="button" aria-label="Toggle menu"
            onClick={() => setShowBurgerMenu(!showBurgerMenu)}
            style={burgerMenuStyle}
            onMouseEnter={() => setBurgerMenuHover(true)}
            onMouseLeave={() => setBurgerMenuHover(false)}
        >
            &#9776;
        </div>

        <div className="nav-right-wrapper" style={navRightWrapperStyle}
            onMouseEnter={() => setNavRightWrapperHovered(true)}
            onMouseLeave={() => setNavRightWrapperHovered(false)}
        >
            {personData ?
            <div onClick={handleLogout}>
                <p style={{fontSize:"1em"}}>Ciao {personData.titolo}</p>
                <h4 style={{fontSize:"1.7em"}}><i>{personData.nickname}</i></h4>
            </div>
            :
            <div onClick={handleLogout}>
                <h4 style={{fontSize:"1.7em"}}>Ciao <i>{nome}</i></h4>
            </div>
            }
        </div>
    </nav>
}

export default Navbar;