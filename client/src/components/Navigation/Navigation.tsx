import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { AuthContext } from "../../Context/AuthContext";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = () => {
  const [user] = useContext(AuthContext);
  const [isLogged, setIslogged] = useState(false);

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
          <NavLink exact activeClassName={styles.active} to="/all">
            Catalog
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
              <NavLink to="/account" activeClassName="active">
                My account
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="active">
                <FontAwesomeIcon
                  className={styles.signOut}
                  icon={faSignOutAlt}
                />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
