import React, { useState, useEffect, useContext } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Homepage.module.scss";
import LoaderComponent from '../Common/LoaderComponent/LoaderComponent';
import uuid from 'uuid';


export default function Homepage() {
  const [cars, setCars] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    carService.getAll()
    .then(data=>{
        setCars(data.data)
        setLoading(true)
    })
    .catch(err=>{
        console.log(err)
    })
    
  },[])

  const shuffledCars=shuffle(cars);

  return (
      <div className={styles.homepage}>
        {loading ? 
           <> 
           {cars.length > 0
                ? (
                <>
                    <div className={styles.homeCarsContainer}>
                    <h2 className={styles.homeCarsContainerHeading}>Welcome to Car Craft</h2>
                    <p className={styles.homeCarsContainerMsg}>The best place to find your dream car</p>
                    <p className={styles.homeCarsContainerMsg + " " + styles.second}>Below you will find some of our top models</p>
                  </div>
                    <ul className={styles.carList}>
                        {shuffledCars.slice(0,6).map(x => <li key={x._id} className={styles.carItem}><CarCard cars={x} /></li>)}
                    </ul>
                    </>
                ) 
                : <p className="empty-list">No cars in database!</p>
            })
            </>
            : <LoaderComponent message="Loading,please wait"/>}
        </div>

  );
}

function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
  }

  return array;
}