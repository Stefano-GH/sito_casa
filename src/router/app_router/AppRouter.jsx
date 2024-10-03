/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
//import "./AppRouter.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Home from "../../pages/home/Home";


/*----------------------------------------
  APP ROUTER STRUCTURE
  ----------------------------------------
*/
const AppRouter = ( {personData, handleLogout, textStyle} ) => {

    return <BrowserRouter className="App">
      <Navbar personData={personData} handleLogout={handleLogout} textStyle={textStyle}/>

      <Routes>
        <Route path="/sito_casa" element={<Home personData={personData} textStyle={textStyle}/>} />
      </Routes>
        
    </BrowserRouter>
}

export default AppRouter;