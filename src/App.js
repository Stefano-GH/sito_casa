/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect, useState } from "react";
import Login from "./router/login/Login";
import AppRouter from "./router/AppRouter";


/*----------------------------------------
  APP  STRUCTURE
  ----------------------------------------
*/
function App() {

  //////////////////////////////
  // dimensione schermo
  //////////////////////////////
  const [isSmall, setIsSmall] = useState((window.innerWidth < 768));

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth<768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  //////////////////////////////
  // logout
  //////////////////////////////
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


  return <div>
    {!isAuthenticated ? (
      <Login setPersonData={setPersonData} setIsAuthenticated={setIsAuthenticated}/>
    ) : (
      <div>
        <AppRouter isSmall={isSmall} personData={personData} handleLogout={handleLogout}/>
      </div>
    )}
  </div>
}

export default App;