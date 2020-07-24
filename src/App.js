import React from "react";
import About from './components/about/about.component.jsx'
import Home from './components/home/home.component.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Nav from "./components/navigation/navigation.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App;
