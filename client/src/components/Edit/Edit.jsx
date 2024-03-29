import React, { useState, useEffect } from "react";
import styles from "./Edit.module.scss";
import carService from "../../services/car-service";
import { useParams, useHistory } from "react-router-dom";
import { Categories } from "../../shared/CategoryOptions";
import { Engines } from "../../shared/EngineOptions";
import useCarState from "../../hooks/useCarState";
import { toast } from "react-toastify";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";

export default function Edit(props) {
  const history = useHistory();

  const { carId } = useParams();
  const [car] = useCarState(carId);
  const [category, setCategory] = useState("");
  const [engine, setEngine] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (carId) {
      setCategory(car.category);
      setEngine(car.engine);
    }
  }, [car]);

  const carEditSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    let carData = Object.fromEntries(new FormData(e.currentTarget));

    carService.update(car._id, carData);
    toast.success("You edited your car successfully !🚗");
    props.history.push(`/details/${carId}`);

  };

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div className={styles.createCar}>
          <form
            onSubmit={carEditSubmitHandler}
            className={styles.createCarForm}
            method="POST"
          >
            <h2 className={styles.carHeading}>Edit Your Car</h2>
            <div>
              <label htmlFor="make">Make</label>
              <input
                placeholder="Type car make..."
                type="text"
                name="make"
                defaultValue={car.make}
              />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <input
                placeholder="Type car model..."
                type="text"
                name="model"
                defaultValue={car.model}
              />
            </div>
            <div>
              <label htmlFor="year">Year</label>
              <input
                placeholder="Type car year..."
                type="number"
                min="1800"
                max="2021"
                name="year"
                defaultValue={car.year}
              />
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <select
                name="category"
                multiple={false}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {Categories.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.text}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="engine" className="engineBox">
                Engine
              </label>
              <select
                name="engine"
                onChange={(e) => setEngine(e.target.value)}
                value={engine}
              >
                {Engines.map((x) => (
                  <option key={x.value} value={x.value}>
                    {x.text}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="price">Price</label>
              <input
                placeholder="$ 1000"
                type="number"
                min="1"
                name="price"
                defaultValue={car.price}
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image</label>
              <input
                type="text"
                name="imageUrl"
                defaultValue={car.imageUrl}
                placeholder="Type image url..."
              />
            </div>
            <button className={styles.createCarBtn} type="submit">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
}
