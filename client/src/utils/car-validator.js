import { toast } from 'react-toastify';

function carValidator(make, model, year,category, engine, price, imageUrl) {

    if (make === '' || model === '' || year === '' || category===''|| engine === '' || price === '' || imageUrl === '') {
        toast.error('Please fill in all the required fields!');
        return false;
    }

    if(!isNaN(make)){
        toast.error('Car make cannot be of type number!');
         return false;
    }
    return true;
}

export default carValidator;