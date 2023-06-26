import React from 'react';
import "./Search.css"

function Search(props) {



    return (
        <div className=' Search-div '>
            <input onChange={(e) => props.setSearchParam(e.target.value)} value={props.searchParam} type="text" placeholder='Search by item name, category' />
            <i className='bx bx-search-alt'></i>
        </div>
    );
}

export default React.memo(Search);
