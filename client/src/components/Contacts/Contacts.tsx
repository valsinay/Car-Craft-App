import React from "react";
import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <form className={styles.form}>
      <h2 className={styles.contactHeading}>Contact form</h2>
      <input
        type="name"
        name="name"
        autoComplete="off"
        placeholder="Your Name"
        className={styles.username}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        autoComplete="off"
        className={styles.email}
      />
      <input
        type="phone"
        name="phone"
        placeholder="Phone"
        autoComplete="off"
        className={styles.phone}
      />

      <textarea
        name="text"
        autoComplete="off"
        placeholder="Your message"
        className={styles.message}
      />
      <button className={styles.submitBtn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Contacts;
