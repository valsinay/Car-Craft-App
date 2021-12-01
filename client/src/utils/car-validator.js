import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function carValidator(make, model, year, horsePower, mileage, engineCapacity,
    category, engine, euroStandard, price, description) {
    if (make === '') {
        toast.error('You must fill the make field!');
        return false;
    }

    if (model === '') {
        toast.error('You must fill the model field!');
        return false;
    }

    if (year === '') {
        toast.error('You must fill the year field!');
        return false;
    } 
    if (horsePower === '') {
      
        toast.error('You must fill the horsepower field!');
      
        return false;
    } 
    if (mileage === '') {
      
        toast.error('You must choose mileage!');
      
        return false;
    } 
    if (engineCapacity === '') {
      
        toast.error('You must fill the engineCapacity field!');
      
        return false;
    } 
    if (category === '') {
      
        toast.error('You must choose category');
      
        return false;
    } 
    if (engine === '') {
      
        toast.error('You must choose engine type!');
      
        return false;
    } 
    if (euroStandard === '') {
      
        toast.error('You must choose euro standard!');
      
        return false;
    } 
    if (price === '') {
        toast.error('You must fill the price field!');
        return false;
    }

    if(description === ""){
        toast.error('You must fill the description field!')
        return false;
    }
    return true;
}

export default carValidator;