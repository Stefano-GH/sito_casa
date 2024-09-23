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

  return <div className="App">
    {!isAuthenticated ? (
      <Login setIsAuthenticated={setIsAuthenticated}/>
    ) : (
      <div>
        <AppRouter setIsAuthenticated={setIsAuthenticated} handleLogout={handleLogout} />
      </div>
    )}
  </div>
}

export default App;