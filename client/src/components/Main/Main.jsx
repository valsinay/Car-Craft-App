import React, { useContext } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import NotFound from "../NotFound/NotFound";
import Contacts from "../Contacts/Contacts";
import About from "../About/About";
import CreateCar from "../CreateCar/CreateCar";
import Details from '../Details/Details'
import Homepage from "../Homepage/Homepage"
import Edit from "../Edit/Edit";
import AllCars from "../Catalog/Catalog"
import { Route, Switch } from "react-router-dom";
import styles from "./Main.module.scss";
import { AuthContext } from "../../Context/AuthContext";
import GuardedRoute from "../Common/GuardedRoute";
import MyAccount from "../MyAccount/MyAccount";


function Main() {
  const [user, setUserStatus] = useContext(AuthContext);

  return (
    <main className={styles.main}>
        <AuthContext.Provider  value={[user, setUserStatus]}>
      <Switch>
        <Route exact path={"/"} component={Homepage} />
        <Route exact path={"/all"} component={AllCars} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/logout"} component={Logout} />
        <Route exact path={"/contacts"} component={Contacts} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/details/:carId"} component={Details} />
        <Route exact path={"/account"} component={MyAccount} />
        <Route component={<GuardedRoute />}>
           <Route exact path={"/create-car"} component={CreateCar} />
           <Route exact path={"/edit/:carId"} component={Edit} />
        </Route>
        {/* <Route  path={"*"} component={NotFound} /> */}


      </Switch>
      </AuthContext.Provider>
    </main>
  );
};

export default Main;
