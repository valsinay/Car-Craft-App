import React, { useState, useEffect, useContext } from "react";
import carService from "../../services/car-service";
import CarCard from "../CarCard/CarCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { AuthContext } from "../../Context/AuthContext";
import styles from "./MyAccount.module.scss";
import LoaderComponent from "../Common/LoaderComponent/LoaderComponent";

export default function MyAccount() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  //set to false loading
  const [searchTerm,setSearchTerm] = useState('')
 
  const [user] = useContext(AuthContext);

  useEffect(() => {

    carService.getMyCars()
    .then(res=> {
      return res.data.filter(el => el.ownerId === user.userId);
    })
    .then(result=>setCars(result))

  }, []);
  console.log("My account cars" ,cars)
  console.log(user.userId)


  return (
    <main className={styles.allCarsMain}>
    <div className={styles.homepage}>
        <div className={styles.allCarsContainer}>
            <h2 className={styles.allCarsContainerHeading}>My account</h2><div className={styles.searchBox}>
	     	<input className={styles.searchBoxInput} type="text" value={searchTerm}
            placeholder="Type here..."
              onChange={e => setSearchTerm(e.target.value)} />
		<FontAwesomeIcon className={styles.searchIcon} icon={faSearch}/>
	        </div>
        </div>
      {loading ? (
        <>
          {cars.length > 0 ? (
            <ul className={styles.carList}>
              {cars
              .sort((a, b) => a.make.localeCompare(b.make))
              .filter(x=>{
                 if( x.make.toLowerCase().includes(searchTerm.toLowerCase())){
                      return true
                  }
                 else if( x.model.toLowerCase().includes(searchTerm.toLowerCase())){
                     return true
                 }
                 else if( x.year.toString().includes(searchTerm)){
                    return true
                }
                else if(x.category.toLowerCase().includes(searchTerm.toLowerCase())){
                    return true
                }
                else if(x.engine.toLowerCase().includes(searchTerm.toLowerCase())){
                    return true
                }
                  else{return false}
              }).map((x) => (
                <li key={x._id} className={styles.carItem}>
                  <CarCard cars={x} />
                </li>))}
            </ul>
          ) : (
            <p className="empty-list">You haven't added cars yet!</p>
          )}
      
        </>
      ) : (
        <LoaderComponent />
      )}
    </div>
    </main>
  );
}