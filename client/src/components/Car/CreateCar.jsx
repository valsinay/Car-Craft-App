import React, { useContext, useState, useEffect } from "react";
import carService from '../../services/car-service';
import carValidator from '../../utils/car-validator';
import { AuthContext } from '../Context/AuthContext'
import sessionManager from '../../utils/session-manager'
import styles from './Create.module.scss';
import { toast } from "react-toastify";

function CreateCar(props) {


    const [user] = useContext(AuthContext);
    const [userId, setUserId] = useState('');

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [horsePower, setHorsepower] = useState('');
    const [mileage, setMileage] = useState('');
    const [engineCapacity, setEngineCapacity] = useState('');
    const [category, setCategory] = useState('');
    const [engine, setEngine] = useState('');
    const [euroStandard, setEuroStandard] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImage] = useState('');


    const name = sessionManager.getUsername();

    useEffect(() => {
        setUserId(user.userId)
    }, [user])


    const updateImage = (e) => {
        setImage(e.target.value);
    }
    const updateMake = (e) => {
        setMake(e.target.value);
    }
    const updateModel = (e) => {
        setModel(e.target.value);
    }
    const updateYear = (e) => {

        setYear(e.target.value);
    }
    const updateHorsepower = (e) => {

        setHorsepower(e.target.value);
    }
    const updateMileage = (e) => {

        setMileage(e.target.value);
    }
    const updateEngineCapacity = (e) => {

        setEngineCapacity(e.target.value);
    }
    const updateCategory = (e) => {

        setCategory(e.target.value);
    }
    const updateEngine = (e) => {

        setEngine(e.target.value);
    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }
    const updateEuroStandard = (e) => {
        setEuroStandard(e.target.value);
    }
    const updateDescription = (e) => {
        setDescription(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (carValidator(make, model, year, horsePower, mileage, engineCapacity, category
            , engine, euroStandard, price, description, imageUrl)) {
            carService.createCar({
                make, model, year, horsePower, mileage, engineCapacity, category
                , engine, euroStandard, price, description, imageUrl, owner: name, ownerId: userId
            })
                .then((response) => {
                    toast.success('You created successfully new car')
                    props.history.push('/')
                    console.log(response)
                })
                .catch(err => {
                    toast.error(err);
                })
        }



    }

    return (
        <div className="carDiv">
            <h2 className="title create">Create Your Car</h2>
            <form onSubmit={handleSubmit} className='createCar'>
                <div>
                    <label htmlFor="make">Make</label>
                    <input
                        placeholder="Type car make..."
                        type="text"
                        name="make"
                        onChange={updateMake}
                        value={make}
                    />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <input
                        placeholder="Type car model..."
                        type="text"
                        name="model"
                        onChange={updateModel}
                        value={model}
                    />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <input
                        placeholder="Type car year..."
                        type="text"
                        name="year"
                        onChange={updateYear}
                        value={year}
                    />
                </div>
                <div>
                    <label htmlFor="horsePower">Horsepower</label>
                    <input
                        placeholder="Type car horsepower..."
                        type="text"
                        name="horsePower"
                        onChange={updateHorsepower}
                        value={horsePower}
                    />
                </div>
                <div>
                    <label htmlFor="mileage">Mileage</label>
                    <select
                        type="text"
                        name="mileage"
                        onChange={updateMileage}
                        value={mileage}

                    >
                        <option value="0" label="Select mileage" />
                        <option value="10000" label="Up to 10000" />
                        <option value="30000" label="Up to 30000" />
                        <option value="50000" label="Up to 50000" />
                        <option value="70000" label="Up to 70000" />
                        <option value="90000" label="Up to 90000" />
                        <option value="100000" label="Over 100000" />
                    </select>
                </div>
                <div>
                    <label htmlFor="engineCapacity">Engine Capacity</label>
                    <input
                        placeholder="Type car engine capacity..."
                        type="text"
                        name="engineCapacity"
                        onChange={updateEngineCapacity}
                        value={engineCapacity}
                    />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        onChange={updateCategory}
                        value={category}
                    >
                        <option value="" label="Select category" />
                        <option value="sedan" label="Sedan" />
                        <option value="suv" label="Suv" />
                        <option value="van" label="Van" />
                        <option value="coupe" label="Coupe" />
                        <option value="cabriolet" label="Cabriolet" />
                        <option value="hatchback" label="Hatchback" />
                    </select>
                </div>
                <div>
                    <label htmlFor="engine" className='engineBox'>Engine</label>
                    <select
                        name="engine"
                        onChange={updateEngine}
                        value={engine}
                    >
                        <option value="" label="Select engine" />
                        <option value="electric" label="electric" />
                        <option value="diesel" label="diesel" />
                        <option value="gasoine" label="gasoline" />
                    </select>
                </div>
                <div>
                    <label htmlFor="euroStandard">Euro Standard</label>
                    <select
                        type="number"
                        name="euroStandard"
                        onChange={updateEuroStandard}
                        value={euroStandard}

                    >
                        <option value="" label="No matter" />
                        <option value="1" label="Euro 1" />
                        <option value="2" label="Euro 2" />
                        <option value="3" label="Euro 3" />
                        <option value="4" label="Euro 4" />
                        <option value="5" label="Euro 5" />
                        <option value="6" label="Euro 6" />
                    </select>
                </div>
                <div >
                    <label htmlFor="price">Price</label>
                    <input
                        placeholder="$ 1000"
                        type="text"
                        name="price"
                        onChange={updatePrice}
                        value={price}

                    />
                </div>
                <div>
                    <label htmlFor='imageUrl'>Image</label>
                    <input
                        type='text'
                        name='imageUrl'
                        onChange={updateImage}
                        value={imageUrl}
                        placeholder='Type image url...' />
                </div>
                <div className="description">
                    <label htmlFor="price">Description</label>
                    <textarea
                        placeholder="Car problems and features..."
                        type="text"
                        name="description"
                        onChange={updateDescription}
                        value={description}

                    ></textarea>
                </div>

                <button className='submitBtn createCarBtn' type="submit" onSubmit={handleSubmit}>Create</button>
            </form>
        </div>
    );
};

export default CreateCar;