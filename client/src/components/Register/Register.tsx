import React, { useState } from "react";
import userService from "../../services/user-service";
import { useHistory } from "react-router-dom";
import registerValidator from "../../utils/register-validator";
import { toast } from "react-toastify";
import styles from "./Register.module.scss";
import "react-toastify/dist/ReactToastify.css";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";
import { Link } from "react-router-dom";

 const Register = ()=> {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const registerSubmitHandler = (e:any) => {
    e.preventDefault();
    setLoading(true);

    let { username, password, confirmPassword } = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    if (registerValidator(username, password, confirmPassword)) {
      userService.register(username, password);
      toast.success("You have successfully registered!", {
        position: "top-right",
      });
      history.push("/login");
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
            method="POST"
            onSubmit={registerSubmitHandler}
          >
            <h2 className={styles.registerHeading}>Register here</h2>
            <input
              className={styles.username}
              type="username"
              name="username"
              autoComplete="off"
              placeholder="Username"
            />
            <input
              className={styles.password}
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            <input
              className={styles.password}
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
            />

            <button className={styles.submitBtn} type="submit">
              Register
            </button>
            <p className={styles.memberParagraph}>
              Already a member?
              <Link className={styles.signHere} to="/login">
                Sign in here!
              </Link>
            </p>
          </form>
        </div>
      )}
    </>
  );
}


export default Register;