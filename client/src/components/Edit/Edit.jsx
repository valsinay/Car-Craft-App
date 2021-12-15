import React, { useContext, useState, useEffect } from "react";
import styles from  './Edit.module.scss'
import carService from "../../services/car-service";
import {useParams}from "react-router-dom"

export default function Edit({}){

    
    const {carId}=useParams();

    const [car,setCar]=useState({})

    useEffect(()=>{

        carService.getOne(carId)
        .then(result=>{
            setCar(result)
        })

        console.log(car)

    },[])

    return(
        <div className={styles.createCar}>
        <form 
        // onSubmit={handleSubmit}
            className={styles.createCarForm} method="POST">
          <h2 className={styles.carHeading}>Edit Your Car</h2>
          <div>
            <label htmlFor="make">Make</label>
            <input
              placeholder="Type car make..."
              type="text"
              name="make"
            //   onChange={updateMake}
              defaultValue={car.make}
            />
          </div>
          <div>
            <label htmlFor="model">Model</label>
            <input
              placeholder="Type car model..."
              type="text"
              name="model"
            //   onChange={updateModel}
              defaultValue={car.model}
            />
          </div>
          <div>
            <label htmlFor="year">Year</label>
            <input
              placeholder="Type car year..."
              type="text"
              name="year"
            //   onChange={updateYear}
              defaultValue={car.year}
            />
          </div>
        
          <div>
            <label htmlFor="category">Category</label>
            <select name="category" 
            // onChange={updateCategory} 
            defaultValue={car.category}>
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
            <select name="engine" 
            // onChange={updateEngine} 
            defaultValue={car.engine}>
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
            //   onChange={updatePrice}
              defaultValue={car.price}
            />
          </div>
          <div>
            <label htmlFor="imageUrl">Image</label>
            <input
              type="text"
              name="imageUrl"
            //   onChange={updateImage}
              defaultValue={car.imageUrl}
              placeholder="Type image url..."
            />
          </div>
          <button
            className={styles.createCarBtn}
            type="submit"
            // onSubmit={handleSubmit}
            >
                Create</button>
        </form>
      </div>
    )
}