import { useState, useEffect, useMemo } from 'react';

import  carService from '../services/car-service';

const useCarState = (carId) => {
    const [car, setCar] = useState({});

    const controller = useMemo(() => {
        const controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        carService.getOne(carId, controller.signal)
            .then(carResult => {
                setCar(carResult);
            })

        return () => {
            controller.abort();
        }
    }, [carId, controller]);

    return [
        car,
        setCar
    ]
};

export default useCarState;