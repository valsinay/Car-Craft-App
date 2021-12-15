import React, { useState, useEffect, useContext } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Homepage.module.scss";

export default function Homepage() {
  const [cars, setCars] = useState([]);

  useEffect(()=>{
    carService.getAll()
    .then(data=>{
        setCars(data.data)
    })
    .catch(err=>{
        console.log(err)
    })
    
  },[])

  return (
    <AuthContext.Provider value={[cars, setCars]}>
      <div className={styles.homepage}>
            {cars.length > 0
                ? (
                    <ul className={styles.carList}>
                        {cars.map(x => <li key={x._id} className={styles.carItem}><CarCard cars={x} /></li>)}
                    </ul>
                ) 
                : <p className="empty-list">No cars in database!</p>
            }
        </div>
     
    </AuthContext.Provider>

    // <CarCard />
  );
}