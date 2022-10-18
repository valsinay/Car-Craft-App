import React, { useState, useContext, ChangeEvent } from "react";
import sessionManager from "../../utils/session-manager";
import userService from "../../services/user-service";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import signValidator from "../../utils/login-validator";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = (props: any) => {
  const [user, setUserStatus] = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const updateUsername = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(e.target.value);
  };

  const updatePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (signValidator(username, password)) {
      userService
        .login(username, password)
        .then((res) => {
          const { token, user } = res.data;
          sessionManager.save(token, user.username);

          toast.success("You have successfully logged in!", {
          });
          setUserStatus({
            isLogged: sessionManager.isLogged(),
            userId: user._id,
          });
          props.history.push("/");
        })
        .catch(() => {
          toast.error("Incorrect username or password");
          setLoading(false);
          return false;
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div className={styles.form}>
          <form
            className={styles.authForm}
            onSubmit={handleSubmit}
            method="POST"
          >
            <h2 className={styles.loginHeading}>Login here</h2>
            <input
              className={styles.username}
              type="username"
              name="username"
              placeholder="Username"
              autoComplete="off"
              value={username}
              onChange={updateUsername}
            />

            <input
              className={styles.password}
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={updatePassword}
            />

            <button className={styles.submitBtn}>Login</button>
            <p className={styles.memberParagraph}>
              Not a member?
              <Link className={styles.registerHere} to="/register">
                Register here!
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
