import React, { Component } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import NotFound from "../NotFound/NotFound";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import CreateCar from "../Car/CreateCar";
import {  Routes,Route,Switch } from "react-router-dom";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
  
    <Switch>
                <Route exact path={'/register'}  component={Register} />
                <Route exact path={'/login'} component={Login} />
                <Route exact path={'/logout'} component={Logout} />
                <Route exact path={'/contacts'} component={Contacts} />
                <Route exact path={'/about'} component={About} />
                <Route exact path={'/create-car'} component={CreateCar} />
                <Route exact path={'/*'} component={NotFound} />

            </Switch>
       
    
    </main>
  );
};

export default Main;
