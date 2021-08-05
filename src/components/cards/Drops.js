import React from 'react'

const Drops = (drops,itemId) => {
let arrayNull
    (drops.drops == null || drops.drops == undefined)? arrayNull=true:arrayNull=false;
    
    return (
        <ul className='sublist'>
        {arrayNull ? <li key={drops.itemId+'-d0'} className='cardDescription2' tabIndex='0'> Not Found</li> : 
        (drops.drops).map((item)=>{return(<li key={drops+'-d'+item} className='cardDescription2' tabIndex='0'>{item}</li>)})}
        </ul>
    )
};

export default Drops

// 
