import React, { useEffect, useState } from "react";
import userService from "../../services/user-service";
import registerValidator from "../../utils/register-validator";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import {
  DatePicker,
  defaultDatePickerStrings,
  mergeStyles,
} from "@fluentui/react";

export default function Register() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  // handleChange = (e) => {
  //   this.setState({
  //     data: {
  //       ...this.state.data,
  //       [e.target.name]: e.target.value,
  //     },
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   const { data } = this.state;

  // if (registerValidator(data.username, data.password, data.confirmPassword)) {
  //   userService.register(data.username, data.password);
  //   toast.success("🦄You have successfully registered!", {
  //     position: "top-right",
  //     toastClassName: "toast-container success",
  //   });
  //   this.props.history.push("/login");
  // }
  const [focus, setFocused] = useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className={styles.form}>
      <form className={styles.authForm}>
        <h2 className={styles.registerHeading}>Register here</h2>
        <input
          className={styles.username}
          type="username"
          name="username"
          autoComplete="off"
          placeholder="Username"
          // value={data.username}
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
          type={`${focus == true ? "date" : "text"}`}
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
}
