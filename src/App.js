/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect, useState } from "react";
import Login from "./router/login/Login";
import AppRouter from "./router/app_router/AppRouter";

const COLOR_1 = "#7EACB5";  // ciano
const COLOR_2 = "#FADFA1";  // giallo ocra
const COLOR_3 = "#C96868";  // cremisi
const COLOR_4 = "#FFF4EA";  // beige


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // verifico l'esistenza del token di autenticazione
  useEffect(() => {
    const nome = localStorage.getItem('nome');
    const cognome = localStorage.getItem('cognome');

    if (nome && cognome) {
      setIsAuthenticated(true);
    }
  },[])

  // definisco il logout
  const handleLogout = () => {
    localStorage.removeItem('nome');
    localStorage.removeItem('cognome');
    setIsAuthenticated(false);
  }

  // gestisco lo stile dei testi
  const textStyle = {
    fontFamily: '"Inter", sans-serif',
    fontStyle: "normal"
  }


  return <div>
    {!isAuthenticated ? (
      <Login setIsAuthenticated={setIsAuthenticated} COLOR_1={COLOR_1} COLOR_2={COLOR_2}
      COLOR_3={COLOR_3} COLOR_4={COLOR_4} textStyle={textStyle}/>
    ) : (
      <div>
        <AppRouter handleLogout={handleLogout} COLOR_1={COLOR_1} COLOR_2={COLOR_2}
        COLOR_3={COLOR_3} COLOR_4={COLOR_4} textStyle={textStyle}/>
      </div>
    )}
  </div>
}

export default App;