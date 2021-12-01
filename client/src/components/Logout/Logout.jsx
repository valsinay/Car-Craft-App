import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Redirect } from 'react-router-dom';
import userService from '../../services/user-service';
import sessionManager from '../../utils/session-manager';

function Logout() {
    const [user, setUserStatus] = useContext(AuthContext);
    userService.logout();
    setUserStatus({ isLogged: false });
    return (
        <Redirect to='/' />
    )
}

export default Logout;