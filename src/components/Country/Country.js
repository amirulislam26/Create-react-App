import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { area, region, population, name, flags } = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>region: {region}</small></p>
            <p><small>area:{area}</small></p>
            <p><small className='Phone'>Phone: 01302090996</small></p>
        </div>
    );
};

export default Country;