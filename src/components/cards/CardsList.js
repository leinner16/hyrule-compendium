import React from 'react'
import Card from './Card'
import loading from '../../img/loading.gif'

const CardsList = ({items, isLoaded}) => {
    return isLoaded ? (<section className='list'>
    {items.map((item) => (
      <Card key={'card'+item.id} item={item} items={items}></Card>
    ))}
  </section>
    ) : (
    <section className='loading'>
      <img src={loading} alt='loading'/>
    </section>
    )
}

export default CardsList
