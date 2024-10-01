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
const AppRouter = ( {handleLogout, COLOR_1, COLOR_2, COLOR_3, COLOR_4,
  textStyle} ) => {

    return <BrowserRouter className="App">
      <Navbar handleLogout={handleLogout} COLOR_1={COLOR_1} COLOR_2={COLOR_2}
      COLOR_3={COLOR_3} COLOR_4={COLOR_4} textStyle={textStyle}/>

      <Routes>
        <Route path="/sito_casa" element={<Home COLOR_1={COLOR_1} COLOR_2={COLOR_2}
        COLOR_3={COLOR_3} COLOR_4={COLOR_4} textStyle={textStyle}/>} />
      </Routes>
        
    </BrowserRouter>
}

export default AppRouter;