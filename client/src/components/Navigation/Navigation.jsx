import React, { useContext, Fragment, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { AuthContext } from "../../Context/AuthContext";
import sessionManager from "../../utils/session-manager";
import { CarSportOutline } from "react-ionicons";

function Navigation() {
  const [user] = useContext(AuthContext);
  const [isLogged, setIslogged] = useState(false);
  const username = sessionManager.getUsername();

  useEffect(() => {
    setIslogged(user.isLogged);
  }, [user]);

  return (
    <nav className={styles.mainWrapper}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="/logo.jpg" alt="" />
        </NavLink>
      </div>
      <ul className={styles.navMenu}>
        <li>
          <NavLink exact activeClassName={styles.active} to="/">
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
        {isLogged ? (
        <li>
          <NavLink exact activeClassName={styles.active} to="/create-car">
            Create Car
           
          </NavLink>
        </li>
        ) : null}
      </ul>

      <ul className={styles.navMenu}>
        {!isLogged ? (
          <>
            <li>
              <NavLink to="/login" activeClassName={styles.active}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName={styles.active}>
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/" activeClassName="active">
                Welcome, {username}
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="active">
                Logout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
