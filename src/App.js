import Navbar from "./Navbar";
import Table from "./Table";
import TrendKey from "./TrendKey";
import Timeline from "./Timeline";
import Play from "./Play";
import Scientists from "./Scientists";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="home-div">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Table />
            <TrendKey />
          </Route>
          <Route path="/timeline">
            <Timeline />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/scientists">
            <Scientists />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
