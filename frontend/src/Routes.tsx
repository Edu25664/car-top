import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "bootstrap/js/src/collapse.js";  
import Home from "./Pages/Home";
import Catalog from "./Pages/Catalog";

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
      <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/catalog">
          <Catalog/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
