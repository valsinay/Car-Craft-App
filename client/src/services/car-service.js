import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const host = 'http://localhost:9999/api';

const carService = {
    createCar: (data) => {
        return axios.post(`${host}/car/createCar`,
            data
        )
    }
}

export default carService;