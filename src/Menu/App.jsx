import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Login from "./Login";
import {Redirect, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Registration from "./Registration";
import "../../src/App.css"

const App=()=>{
    return(
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Redirect to="/" />
    
    </Switch>
    <Footer/>


    </>
    );
   
};
export default App;