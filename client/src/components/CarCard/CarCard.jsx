import React from 'react'
import styles from './CarCard.module.scss'

export default function CarCard(){

    
    return(
        <div className={styles.productCard}>
            <div className={styles.productImgName}>
                <img src="/Sklasse.jpg" alt="" />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.details}>
                <h1>Audi R8</h1>
                    <p>Horsepower</p>

                    <p>Toruqe</p>
                    <p>Acceleration</p>
                </div>
                <div className={styles.pricingInfo}>
                    <p>Starting at 169</p>
                    <button className={styles.bookBtn}>Book now</button>
                </div>
            </div>
        </div>
    )
}