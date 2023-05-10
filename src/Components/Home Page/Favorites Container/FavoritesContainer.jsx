import React from 'react';
import "./FavoritesContainer.css"

function FavoritesContainer(props) {
    return (
        <div className=' FavoritesContainer-div '>
            <div className='FavoritesContainer-div_heading'>
                <h3>
                    <i className='bx bxs-heart'></i>
                    Your Favourites
                </h3>
            </div>


            <div className='FavoritesContainer-div_container' >
                <div className='FavoritesContainer-div_container__DefaultFavourites-div'>
                    <img src="https://thrivenow.in/assets/images/share/no-favorites.png" alt="" />
                    <p>Like your favourite items now, to order them quickly!</p>
                </div>

            </div>
        </div>
    );
}

export default FavoritesContainer;
