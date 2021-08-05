import React from 'react'

const Locations = (locations) => {
let arrayNull;
    (locations.location === null )? arrayNull=true:arrayNull=false;
    return (
        <ul className='sublist'>
        {arrayNull ? <li key={locations.itemId+'l0'} className='cardDescription2' tabIndex='0'> Not Found</li> : 
        (locations.location).map((item)=>{
            return(<li key={locations.itemId+'l-'+item} className='cardDescription2'tabIndex='0'>{item}</li>)})}
        </ul>
    )
};

export default Locations
