import React, { useState, useEffect } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Catalog.module.scss";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";
import { Car } from "../models/CarModel";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <main className={styles.allCarsMain}>
      <div className={styles.homepage}>
        <div className={styles.allCarsContainer}>
          <h2 className={styles.allCarsContainerHeading}>Car Catalog</h2>
          <div className={styles.searchBox}>
            <input
              className={styles.searchBoxInput}
              type="text"
              value={searchTerm}
              placeholder="Type here..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FontAwesomeIcon className={styles.searchIcon} icon={faSearch} />
          </div>
        </div>
        {loading ? (
          <>
            {cars.length > 0 ? (
              <ul className={styles.carList}>
                {cars
                  .sort((a: Car, b: Car) => a.make.localeCompare(b.make))
                  .filter((x: Car) => {
                    if (
                      x.make.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return true;
                    } else if (
                      x.model.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return true;
                    } else if (x.year.toString().includes(searchTerm)) {
                      return true;
                    } else if (
                      x.category
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return true;
                    } else if (
                      x.engine.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return true;
                    } else {
                      return false;
                    }
                  })
                  .map((x: Car) => (
                    <li key={x._id} className={styles.carItem}>
                      <CarCard cars={x} />
                    </li>
                  ))}
              </ul>
            ) : (
              <p className={styles.emptyList}>No cars in database!</p>
            )}
          </>
        ) : (
          <LoaderComponent />
        )}
      </div>
    </main>
  );
};

export default AllCars;
