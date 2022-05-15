import React, { useState } from "react";

function Card({ news }) {
    const [favorite, setFavorite] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const addToFavorite = id => {
        if (!favorite.includes(id)) setFavorite(favorite.concat(id));
        console.log(id);

    };

    const removeFavorite = id => {
        let index = favorite.indexOf(id);
        let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
        setFavorite(temp);
    };
    let findfavorite = news.filter(news => favorite.includes(news.id));

    // eslint-disable-next-line array-callback-return
    let filtered = news.filter(news => {
        if (searchTerm === "") {
            return news;
        } else if (news.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return news;
        }
    });


    return (
        <div className="main">
            <div className="recipe__search">
                <input
                    type="text"
                    onChange={event => {
                        setSearchTerm(event.target.value);
                    }}
                />
            </div>
            <div className="">
                <div className="">
                    <h2>all News</h2>
                    {filtered.map(recipe => {
                        return (
                            <div key={recipe.id} className="">
                                <h2 className="">{recipe.title}</h2>
                                <img src={recipe.imageUrl} alt="" width={500} height={500} />
                                <h4 className="recipe__card__desc">
                                    {recipe.summary.length < 100
                                        ? `${recipe.summary}`
                                        : `${recipe.summary.substring(0, 120)}...`}
                                </h4>
                                <button onClick={() => addToFavorite(recipe.id)}>
                                    add to favorite
                                </button>
                            </div>
                        );
                    })}
                </div>

                <div className="favorite__list">
                    <h2>favorite recipes</h2>
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
            </div>
        </div>
    );


}


export default Card;