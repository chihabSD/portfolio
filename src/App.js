import React from "react";
import './assets/css/landing.css'
import './assets/css/index.css'
import './assets/css/nav.css'
import './assets/css/work-education.css'

import { BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./components/Landing";
import MyPortfolio from "./components/MyPortfolio";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Landing } />
      <Route exact path="/me" component={ MyPortfolio } />
    </Router>
  );
}

export default App;
