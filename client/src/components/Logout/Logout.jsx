import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';

function Logout() {
    const [setUserStatus] = useContext(AuthContext);
    userService.logout();
    setUserStatus({ isLogged: false });
    return (
        <Redirect to='/' />
    )
}

export default Logout;