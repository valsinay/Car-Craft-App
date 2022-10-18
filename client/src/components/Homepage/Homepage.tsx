import React, { useState, useEffect } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import styles from "./Homepage.module.scss";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";
import { Car } from "../models/CarModel";
const Homepage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    carService
      .getAll()
      .then((data) => {
        setCars(data.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const shuffledCars = shuffle(cars);

  return (
    <div className={styles.homepage}>
      {loading ? (
        <>
          {cars.length > 0 ? (
            <>
              <div className={styles.homeCarsContainer}>
                <h2 className={styles.homeCarsContainerHeading}>
                  Welcome to Car Craft
                </h2>
                <p className={styles.homeCarsContainerMsg}>
                  The best place to find your dream car
                </p>
                <p
                  className={styles.homeCarsContainerMsg + " " + styles.second}
                >
                  Below you will find some of our top models
                </p>
              </div>
              <ul className={styles.carList}>
                {shuffledCars.slice(0, 6).map((x: Car) => (
                  <li key={x._id} className={styles.carItem}>
                    <CarCard cars={x} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className={styles.emptyList}>No cars in database!</p>
          )}
        </>
      ) : (
        <LoaderComponent message="Loading,please wait" />
      )}
    </div>
  );
};

function shuffle(array: Car[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default Homepage;
