import React from 'react';
import "./Search.css"

function  Search (props) {
    return ( 
        <div className=' Search-div '>
            <input type="text" placeholder='Search by item name, category' />
            <i className='bx bx-search-alt'></i>
        </div>
     );
}

export default Search;
