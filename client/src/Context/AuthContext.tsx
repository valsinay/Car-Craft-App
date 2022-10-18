import React, {useState, createContext} from 'react';

export const AuthContext = createContext<any>(null);

export const AuthProvider = (props:any) => {
  const [user, setUserStatus] = useState( {isLogged: false, userId: ''} );
  const [cars, setCars] = useState([]);

 
  return(
    <AuthContext.Provider value={[user, setUserStatus,cars,setCars]}>
      {props.children}
    </AuthContext.Provider>  
  )
}