import axios from 'axios';
import sessionManager from '../utils/session-manager';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const host = 'http://localhost:9999/api';

const userService = {
    register: (username, password) => {
        axios.post(`${host}/user/register`, {
            username,
            password
        })
            .catch(err => {
                console.error(err);
            });
    },

    login: (username, password) => {
        return axios.post(`${host}/user/login`, {
            username,
            password
        })
    },
    logout: () => {
        axios.post(`${host}/user/logout`)
            .then((res) => {
                sessionManager.clear();
                toast.success('You have successfully logged out.')
                console.log('user logged out')
            })
    }
}

export default userService;