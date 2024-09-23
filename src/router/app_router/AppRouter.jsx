/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
//import "./AppRouter.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";


/*----------------------------------------
  APP ROUTER STRUCTURE
  ----------------------------------------
*/
const AppRouter = ( {handleLogout, BG_COLOR, FG_COLOR} ) => {
    return <BrowserRouter className="App">
      <Navbar handleLogout={handleLogout} BG_COLOR={BG_COLOR} 
        FG_COLOR={FG_COLOR} />
        
    </BrowserRouter>
}

export default AppRouter;