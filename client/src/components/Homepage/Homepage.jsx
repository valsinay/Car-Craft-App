import React, { useState, useEffect, useContext } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./Homepage.module.scss";
import LoaderComponent from '../Common/LoaderComponent/LoaderComponent';


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

  return (
      <div className={styles.homepage}>
        {loading ? 
           <> 
           {cars.length > 0
                ? (
                    <ul className={styles.carList}>
                        {cars.map(x => <li key={x._id} className={styles.carItem}><CarCard cars={x} /></li>)}
                    </ul>
                ) 
                : <p className="empty-list">No cars in database!</p>
            })
            </>
            : <LoaderComponent/>}
        </div>

  );
}
