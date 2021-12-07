import React, { useContext, useState, useEffect } from "react";
import carService from "../../services/car-service";
import carValidator from "../../utils/car-validator";
import { AuthContext } from "../Context/AuthContext";
import sessionManager from "../../utils/session-manager";
import styles from "./Create.module.scss";
import { toast } from "react-toastify";

function CreateCar(props) {
  const [user] = useContext(AuthContext);
  const [userId, setUserId] = useState("");

  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [horsePower, setHorsepower] = useState("");
  const [mileage, setMileage] = useState("");
  const [engineCapacity, setEngineCapacity] = useState("");
  const [category, setCategory] = useState("");
  const [engine, setEngine] = useState("");
  const [euroStandard, setEuroStandard] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImage] = useState("");

  const name = sessionManager.getUsername();

  useEffect(() => {
    setUserId(user.userId);
  }, [user]);

  const updateImage = (e) => {
    setImage(e.target.value);
  };
  const updateMake = (e) => {
    setMake(e.target.value);
  };
  const updateModel = (e) => {
    setModel(e.target.value);
  };
  const updateYear = (e) => {
    setYear(e.target.value);
  };
  const updateHorsepower = (e) => {
    setHorsepower(e.target.value);
  };
  const updateMileage = (e) => {
    setMileage(e.target.value);
  };
  const updateEngineCapacity = (e) => {
    setEngineCapacity(e.target.value);
  };
  const updateCategory = (e) => {
    setCategory(e.target.value);
  };
  const updateEngine = (e) => {
    setEngine(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateEuroStandard = (e) => {
    setEuroStandard(e.target.value);
  };
  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      carValidator(
        make,
        model,
        year,
        horsePower,
        mileage,
        engineCapacity,
        category,
        engine,
        euroStandard,
        price,
        description,
        imageUrl
      )
    ) {
      carService
        .createCar({
          make,
          model,
          year,
          horsePower,
          mileage,
          engineCapacity,
          category,
          engine,
          euroStandard,
          price,
          description,
          imageUrl,
          owner: name,
          ownerId: userId,
        })
        .then((response) => {
          toast.success("You created successfully new car🚗");
          props.history.push("/");
          console.log(response);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <div className={styles.createCar}>
      <form onSubmit={handleSubmit} className={styles.createCarForm}>
        <h2 className={styles.carHeading}>Create Your Car</h2>
        <div>
          <label htmlFor="make">Make</label>
          <input
            placeholder="Type car make..."
            type="text"
            name="make"
            onChange={updateMake}
            value={make}
          />
        </div>
        <div>
          <label htmlFor="model">Model</label>
          <input
            placeholder="Type car model..."
            type="text"
            name="model"
            onChange={updateModel}
            value={model}
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            placeholder="Type car year..."
            type="text"
            name="year"
            onChange={updateYear}
            value={year}
          />
        </div>
      
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" onChange={updateCategory} value={category}>
            <option value="" label="Select category" />
            <option value="sedan" label="Sedan" />
            <option value="suv" label="Suv" />
            <option value="van" label="Van" />
            <option value="coupe" label="Coupe" />
            <option value="cabriolet" label="Cabriolet" />
            <option value="hatchback" label="Hatchback" />
          </select>
        </div>
        <div>
          <label htmlFor="engine" className="engineBox">
            Engine
          </label>
          <select name="engine" onChange={updateEngine} value={engine}>
            <option value="" label="Select engine" />
            <option value="diesel" label="diesel" />
            <option value="petrol" label="petrol" />
            <option value="electric" label="electric" />
          </select>
        </div>
        
        <div>
          <label htmlFor="price">Price</label>
          <input
            placeholder="$ 1000"
            type="text"
            name="price"
            onChange={updatePrice}
            value={price}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image</label>
          <input
            type="text"
            name="imageUrl"
            onChange={updateImage}
            value={imageUrl}
            placeholder="Type image url..."
          />
        </div>
        {/* <div className={styles.description}>
          <label htmlFor="price">Description</label>
          <textarea
            placeholder="Car problems and features..."
            type="text"
            name="description"
            onChange={updateDescription}
            value={description}
          ></textarea>
        </div> */}

        <button
          className={styles.createCarBtn}
          type="submit"
          onSubmit={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateCar;
