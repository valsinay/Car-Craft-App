import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const host = "http://localhost:9999/api";

const carService = {
  createCar: (data) => {
    return axios.post(`${host}/car/createCar`, data);
  },

  getAll: (data) => {
    return axios(`${host}/car/carList`,data);
  },
  update: (carId, carData) => {
    return axios.put(`${host}/car/edit/${carId}`, carData);
  },
  getOne:(carId)=>{
    return fetch(`${host}/car/details/${carId}`)
    .then(res=>res.json())
  },
  delete:(carId,data)=>{
    return axios.delete(`${host}/car/delete/${carId}`, data)

  }
};

export default carService;
