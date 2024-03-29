import styles from './Details.module.scss'
import { Link,useParams, useHistory} from 'react-router-dom';
import React, { useState, useEffect,useContext } from "react";
import carService from '../../services/car-service';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from "react-toastify";
import LoaderComponent from '../Common/LoaderComponent/LoaderComponent';

const Details =()=>{

  const history = useHistory();
  const [loading,setLoading]=useState(false)
  const [car,setCar] = useState<any>({})
  const {carId} :any= useParams();
  const [user]= useContext(AuthContext);


    useEffect(()=>{
        carService.getOne(carId)
        .then(carResult=>{
            setCar(carResult)
        })
    },[carId])


    const deleteHandler = (e:any)=>{
        e.preventDefault();
        setLoading(true)

        carService.delete(carId)
        .then(() =>{
            toast.success("You deleted successfully your car!🚗");
            history.push('/')       
        });

    }

    return(
        <>
        <main className={styles.mainDetails}>
        {loading ? <LoaderComponent/> : 
         
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
            {user.userId === car.ownerId ?  <div className={styles.buttonBox}>
                <Link className={styles.editBtn} to={`/edit/${car._id}`}>Edit</Link>
                <Link className={styles.deleteBtn} to={`/delete/${car._id}`} onClick={deleteHandler}>Delete</Link>
            </div> : null}
           
        </div>
    </div>     
  }
  </main>
    </>
    )
}
export default Details;