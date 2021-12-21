import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/ProjectsProps";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "./components/FindMe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Intro}></Route>
          <Route exact path="/projects" component={Project}></Route>
          <Route exact path="/find-me" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
