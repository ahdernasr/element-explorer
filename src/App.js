import Navbar from "./Navbar";
import Table from "./Table";
import TrendKey from "./TrendKey";
import ElementInfo from "./ElementInfo";
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
          <Route path="/info/:elementName">
            <ElementInfo />
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
