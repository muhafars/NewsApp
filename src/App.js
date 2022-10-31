import Home from "./display/Home";
import Navs from "./layout/Navs";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navs />
      <Home />
    </div>
  );
}
export default App;
