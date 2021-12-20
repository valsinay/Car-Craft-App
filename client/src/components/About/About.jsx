import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.scss";

function About() {
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.mercedes}>
        <h2>About us</h2>
        <div className={styles.aboutFlexWrapper}>
          <img src="/car-dealership.jpg" alt="" />
          <p>
            It is important to know that you will travel safely and you will not
            have unpleasant events on the route. This is our purpose and besides
            offering you a quality transport, we will always be careful to feel
            safe and comfortable in our cars. Our rental offers only cars with a
            chauffeur and covers a diverse range of requirements and needs,
            meeting the highest standards. Consult Team Transport’s car park is
            a varied one, our company offering Mercedes Vito buses and
            minibuses.
          </p>
        </div>
        <Link className={styles.bookingsButton} to="/all">
         Check vehicle catalog
        </Link>
      </div>
    </div>
  );
}
export default About;
