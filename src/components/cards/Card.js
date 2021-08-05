import React from 'react'
import Locations from './Locations'
import Drops from './Drops'

const Card = ({item , items}) => {
    const locations = item.common_locations;
    const drops = item.drops
    //console.log(locations);
    return (
        <div className='card' tabIndex='0'>
            <div className='cardTop'>
                <h2 className='info'>{item.id}. {item.name}</h2>
                <img src={item.image} alt={item.name} className='images'/>
            </div>
            
            <div className='cardBottom'>
                <ul className='properties'>
                    <li className='cardSubtitle' tabIndex='0'><span className='glyph'>descrip</span>  Description  <span className='glyph'>pircsed</span></li>
                    <li className='cardDescription' tabIndex='0'>{item.description}</li>
                    <li className='cardSubtitle' tabIndex='0'><span className='glyph'>loc</span>  Common Locations  <span className='glyph'>col</span></li>
                    <li><Locations itemId={item.id} location={locations} /></li>
                    <li className='cardSubtitle'tabIndex='0'><span className='glyph'>materials</span>  Drops  <span className='glyph'>slairetma</span></li>
                    <li><Drops itemId={item.id} drops={drops} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Card
