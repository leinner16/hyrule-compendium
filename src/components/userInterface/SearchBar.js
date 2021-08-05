import React from 'react'

const SearchBar = ({onKeyChange}) => {
    
    return (
        <section className = 'searchBar'>
            <form id='searchBox'>
                <input 
                type='text'
                className='form'
                placeholder='Type your search here'
                
                onChange={(event)=>onKeyChange(event.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default SearchBar
