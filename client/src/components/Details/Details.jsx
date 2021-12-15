import styles from './Details.module.scss'
import { Link,useParams} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import carService from '../../services/car-service';


export default function Details(){

    const [car,setCar] = useState({})
    let {carId} = useParams();

    useEffect(()=>{

        carService.getOne(carId)
        .then(carResult=>{
            setCar(carResult)
        })
    },[])


    return(
        <div className={styles.productCard}>
            <h1> <span>{car.make} {car.model}</span></h1>
        <div className={styles.productImgName}>
            <img src={car.imageUrl} alt="" />
        </div>
        <div className={styles.productInfo}>
            <div className={styles.details}>
                <p>Year: <span>{car.year}</span></p>
                <p>Category: <span>{car.category}</span></p>
                <p>Fuel Type: <span>{car.engine}</span></p>
                <p>Price: <span>${car.price}</span></p>
            </div>
            <div className={styles.buttonBox}>
                <Link className={styles.editBtn} to={`/edit/${car._id}`}>Edit</Link>
                <Link className={styles.deleteBtn} to={`/delete/${car._id}`}>Delete</Link>
            </div>
        </div>
    </div>
    )
}