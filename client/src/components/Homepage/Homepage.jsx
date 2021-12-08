import React,{useState, useEffect} from 'react'
import { createVoidZero } from 'typescript';
import CarCard from '../CarCard/CarCard';
import styles from "./Homepage.module.scss";


export default function Homepage(){

    const [cars,setCars]= useState([])

    useEffect(() =>{

       fetch('http://localhost:9999/api/car/carList')
        .then(res=>res.json())
        .then(result =>{
            console.log(result)
             setCars(result)
             
        })
    }, [])
    
    return(
        <ul>
            {cars.map(x=> <li key={x._id}>{x.make}</li>)}
        </ul>

        // <CarCard />
    )
}