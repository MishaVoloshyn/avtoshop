import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';
import { CarCardPattern } from './CarCardPattern';

export function CarsList2({ limit }) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(carsData.slice(0, 12));
    }, [limit]);

    return (

        <div className="row gx-3 gy-3">
            {cars.map(car => (
                <CarCardPattern key={car.id} car={car} />
            ))}
        </div>

    );
}

