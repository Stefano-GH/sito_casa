/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect, useState } from "react";
import Login from "./router/login/Login";
import AppRouter from "./router/app_router/AppRouter";


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {
  const [personData, setPersonData] = useState(null);
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
    setPersonData(null);
    setIsAuthenticated(false);
  }

  // gestisco lo stile dei testi
  const textStyle = {
    fontFamily: '"Inter", sans-serif',
    fontStyle: "normal"
  }


  return <div>
    {!isAuthenticated ? (
      <Login setPersonData={setPersonData} setIsAuthenticated={setIsAuthenticated} textStyle={textStyle}/>
    ) : (
      <div>
        <AppRouter personData={personData} handleLogout={handleLogout} textStyle={textStyle}/>
      </div>
    )}
  </div>
}

export default App;