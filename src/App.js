/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
import { useEffect, useState } from "react";
import Login from "./router/login/Login";
import AppRouter from "./router/app_router/AppRouter";

const BG_COLOR = "white";
const FG_COLOR = "black";


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

  return <div>
    {!isAuthenticated ? (
      <Login setIsAuthenticated={setIsAuthenticated} BG_COLOR={BG_COLOR}
        FG_COLOR={FG_COLOR}/>
    ) : (
      <div>
        <AppRouter handleLogout={handleLogout} BG_COLOR={BG_COLOR} 
          FG_COLOR={FG_COLOR}/>
      </div>
    )}
  </div>
}

export default App;