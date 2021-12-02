import React, { Component } from "react";
import styles from "./Contacts.module.scss";

export default function Contacts() {
  return (
    <form className={styles.form}>
      <h2 className={styles.contactHeading}>Contact form</h2>
      <input
        type="name"
        name="name"
        autoComplete="off"
        placeholder="Your Name"
        className={styles.username}
        // value={data.username}
        //onChange={this.handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        autoComplete="off"
        className={styles.email}
        // value={data.password}
        // onChange={this.handleChange}
      />
      <input
        type="phone"
        name="phone"
        placeholder="Phone"
        autoComplete="off"
        className={styles.phone}
      />

      <textarea
        type="text"
        name="text"
        autoComplete="off"
        placeholder="Your message"
        className={styles.message}
        // value={data.confirmPassword}
        // onChange={this.handleChange}
      />
      <button className={styles.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
}
