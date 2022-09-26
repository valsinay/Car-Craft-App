import React, { useState, useEffect, useContext } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import sessionManager from "../../utils/session-manager";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./MyAccount.module.scss";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";

export default function MyAccount() {
  const [cars, setCars] = useState([]);
  const [loading] = useState(true);


  const [searchTerm, setSearchTerm] = useState("");
  const username = sessionManager.getUsername();
  const [user] = useContext(AuthContext);

  useEffect(() => {
    carService
      .getMyCars()
      .then((res) => {
        return res.data.filter((el) => el.ownerId === user.userId);
      })
      .then((result) => setCars(result));
  }, []);

  return (
    <main className={styles.allCarsMain}>
      <div className={styles.homepage}>
        <div className={styles.allCarsContainer}>
          <h2 className={styles.allCarsContainerHeading}>
            Welcome to your garage, <span>{username}! </span>
          </h2>
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
                  .sort((a, b) => a.make.localeCompare(b.make))
                  .filter((x) => {
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
                  .map((x) => (
                    <li key={x._id} className={styles.carItem}>
                      <CarCard cars={x} />
                    </li>
                  ))}
              </ul>
            ) : (
              <p className={styles.emptyList}>You haven't added cars yet!</p>
            )}
          </>
        ) : (
          <LoaderComponent />
        )}
      </div>
    </main>
  );
}
