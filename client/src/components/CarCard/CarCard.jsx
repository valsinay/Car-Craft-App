import React,{useContext} from 'react'
import styles from './CarCard.module.scss'
import { AuthContext } from '../../Context/AuthContext'
import {Link} from 'react-router-dom'

export default function CarCard({cars}){

    const value=useContext(AuthContext)

    
    return(
        <div className={styles.productCard}>
            <div className={styles.productImgName}>
                <img src={cars.imageUrl} alt="" />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.details}>
                <h1>Brand: <span>{cars.make} {cars.model}</span></h1>
                    <p>Year: <span>{cars.year}</span></p>
                    <p>Category: <span>{cars.category}</span></p>
                    <p>Fuel Type: <span>{cars.engine}</span></p>
                    <p>Price: <span>${cars.price}</span></p>
                </div>
                <div className={styles.pricingInfo}>
                    <Link className={styles.detailsBtn} to={`/details/${cars._id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}