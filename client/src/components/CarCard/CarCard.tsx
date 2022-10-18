import React from "react";
import styles from "./CarCard.module.scss";
import { Link } from "react-router-dom";
const CarCard= ({ cars }:any) =>{
  return (
    <>
      <div className={styles.mainCard}>
        <h1 className={styles.details}>
          <span>
            {cars.make} {cars.model}
          </span>
        </h1>
        <div className={styles.productCard}>
          <div className={styles.productImgName}>
            <img src={cars.imageUrl} alt="" />
          </div>
          <div className={styles.productInfo}>
            <div className={styles.details}>
              <p>
                Year: <span>{cars.year}</span>
              </p>
              <p>
                Category: <span>{cars.category}</span>
              </p>
              <p>
                Fuel Type: <span>{cars.engine}</span>
              </p>
              <p>
                Price: <span>${cars.price}</span>
              </p>
            </div>
            <div className={styles.pricingInfo}>
              <Link className={styles.detailsBtn} to={`/details/${cars._id}`}>
                Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarCard;