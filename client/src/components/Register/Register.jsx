import React, {  useState } from "react";
import userService from "../../services/user-service";
import { useHistory } from "react-router-dom";

import registerValidator from "../../utils/register-validator";
import { toast } from "react-toastify";
import { Link} from "react-router-dom";
import styles from "./Register.module.scss";
import 'react-toastify/dist/ReactToastify.css';


export default function Register() {

  const history = useHistory();

  const [focus, setFocused] = useState(false);

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let { username, password, confirmPassword, date, address } =
      Object.fromEntries(new FormData(e.currentTarget));

    if (registerValidator(username, password, confirmPassword)) {
      userService.register(username, password);
      toast.success("🦄You have successfully registered!", {
        position: "top-right",
        toastClassName: "toast-container success"
      });
     history.push("/login");
     
    }
  }
    

    return (

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
            //  value={data.username}
            // onChange={this.handleChange}
          />
          <input
            className={styles.password}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            // value={data.password}
            //  onChange={this.handleChange}
          />
          <input
            className={styles.password}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            // value={data.confirmPassword}
            //  onChange={this.handleChange}
          />

          <input
            className={styles.datePicker}
            type="text"
            placeholder="Select your birthdate"
            name="date"
            onFocus={onFocus}
            onBlur={onBlur}
            type={`${focus === true ? "date" : "text"}`}
          />

          <input
            className={styles.address}
            type="text"
            placeholder="Enter your address"
            name="address"
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
    );
  };

