import React, { useState, useEffect, Fragment } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import LogIn from "./components/login/Login";
import Chat from "./components/Chat/Chat";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Switch>
          <Route path="/" exact>
            <Navbar />
            <ScrollToTop />
            <Home />
           
            <About />
            <Projects />
            <Footer />
            <Chat/>
          </Route>
          <Route path="/resume">
            <Navbar />
            <Resume />
          </Route>
          <Route path="/login">
            <Navbar />
            <LogIn />
          </Route>

          <Route path="*" >

            <Redirect to="/"/>
          </Route>
        </Switch>
      </div>
    </Fragment>

    // <Router>
    //   <Preloader load={load} />
    //   <div className="App" id={load ? "no-scroll" : "scroll"}>
    //     <Navbar />
    //     <ScrollToTop />
    //     <Switch>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/project" element={<Projects />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/resume" element={<Resume />} />
    //       <Route path="*" element={<Redirect to="/"/>} />
    //     </Switch>
    //     <Footer />
    //   </div>
    // </Router>
  );
}

export default App;
