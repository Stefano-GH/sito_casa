/*----------------------------------------
  LIBRARIES AND CONSTANTS
  ----------------------------------------
*/
//import "./AppRouter.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import RegoleCasa from "../pages/regole_casa/RegoleCasa";
import Gatti from "../pages/gatti/Gatti";
import FunFacts from "../pages/fun_facts/FunFacts";
import Idea from "../pages/idea/Idea";
import Footer from "../components/Footer";


/*----------------------------------------
  APP ROUTER STRUCTURE
  ----------------------------------------
*/
const AppRouter = ( {isSmall, personData, handleLogout} ) => {

    return <BrowserRouter className="App">
      <Navbar isSmall={isSmall} personData={personData} handleLogout={handleLogout}/>

      <Routes>
        <Route path="/sito_casa" element={<Home personData={personData}/>} />
        <Route path="/sito_casa/regole" element={<RegoleCasa />} />
        <Route path="/sito_casa/gatti" element={<Gatti />} />
        <Route path="/sito_casa/funfacts" element={<FunFacts />} />
        <Route path="/sito_casa/idea" element={<Idea />} />
      </Routes>

      <Footer />        
    </BrowserRouter>
}

export default AppRouter;