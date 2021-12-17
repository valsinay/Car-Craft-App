import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function carValidator(make, model, year,category, engine, price) {

    if (make === '' || model === '' || year === '' || category===''|| engine ==='' || price === '') {
        toast.error('Please fill in all the required fields!');
        return false;
    }

    if(typeof make != 'string')
    {
        toast.error('Make cannot be of type number.');
          return false

    }
    if (typeof model !=='string') {
        toast.error('Model cannot be of type number.');
        return false;
    }

    if (isNaN(year)) {
        toast.error('Make cannot be of type number.');
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
    
    if (price === '') {
        toast.error('You must fill the price field!');
        return false;
    }
    return true;
}

export default carValidator;