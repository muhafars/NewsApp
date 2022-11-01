import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "../display/Business";
import Entertainment from "../display/Entertainment";
import General from "../display/General";
import Home from "../display/Home";
import Sports from "../display/Sports";
import Technology from "../display/Technology";
import Navs from "../layout/Navs";

const Routing = () => {
    return (
        <div>
            
        <Router>
            <Navs />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/general" element={<General/>}/>
                <Route exact path="/technology" element={<Technology/>}/>
                <Route exact path="/sports" element={<Sports/>}/>
                <Route exact path="/business" element={<Business/>}/>
                <Route exact path="/entertainment" element={<Entertainment/>}/>
            </Routes>
        </Router>
        </div>
     );
}
 
export default Routing;
