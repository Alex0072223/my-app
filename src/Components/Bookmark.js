
import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

function Bookmark ({ news }) {
    const [favorite, setFavorite] = useState([]);

    // console.log(localStorage.getItem('idOf'))

    // let storage= JSON.parse(localStorage.getItem('Detail'));

  // let idPost = parseInt(localStorage.getItem('idOf'));

    const storage= JSON.parse(localStorage.getItem('Detailer'));

   // console.log(parseInt(storage.idds))

    if (!favorite.includes(parseInt(storage.idPush))) setFavorite(storage.idPush);
     console.log(favorite)



    let findfavorite = news.filter(news => favorite.includes(news.id));
    console.log(findfavorite)

    const clearSti = () =>{
        localStorage.clear();

    };

    const removeFavorite = id => {
        let index = favorite.indexOf(id);
        console.log("sssssssssss"+favorite[index])
        /*if(index >= 0) {
            favorite.splice(index,1);
        }
        setFavorite(favorite);*/

        let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
       // storage.removeItem(index)
        setFavorite(temp);

    };



    return (
        <div>
            <ul>
                <li><Link to={'/about'}><h5>Про автора</h5></Link></li>
                <li><Link to={'/'}><h5>Назад</h5></Link></li>
            </ul>
            <br/>
            <button onClick={() => clearSti}>
                add to favorite
            </button>


            {findfavorite.map(recipe => {
                return (
                    <div key={recipe.id} className="recipe__card">
                        <h2 className="">{recipe.title}</h2>
                        <img src={recipe.imageUrl} alt="" width={500} height={500} />
                        <h4 className="recipe__card__info">
                            <p className="recipe__card__info--icon">

                            </p>
                        </h4>
                        <h4 className="recipe__card__desc">
                            {recipe.summary.length < 100
                                ? `${recipe.summary}`
                                : `${recipe.summary.substring(0, 120)}...`}
                        </h4>
                        <button onClick={() => removeFavorite(recipe.id)}>
                            remove favorite
                        </button>
                    </div>
                );
            })}




        </div>
    )
}

export default Bookmark;