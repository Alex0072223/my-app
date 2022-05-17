import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { render} from "react-dom";
import {createRoot} from "react-dom/client";



const ZetApp = ({news, loading}) => {
    const [searchTerm, setSearchTerm] = useState("");
    let idPush = [];
    let detailer = { idPush };

    if(loading){
        return <h2>Loading...</h2>
    }



    // eslint-disable-next-line array-callback-return
    let filtered = news.filter(news => {
        if (searchTerm === "") {
            return news;
        } else if (news.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return news;
        }
    });

    const addToFavorite = id => {
        idPush.push(id)
        localStorage.setItem('Detailer', JSON.stringify(detailer));
    };



    return(

        <div>

            <h2>поиск новости на странице</h2>
            <input
                type="text"
                onChange={event => {
                    setSearchTerm(event.target.value);
                }}
            />


            <h2>Космические новости </h2>
            {
                /*news.*/filtered.map((article,i) =>(

                    <div key={filtered.id} className="article">

                        <br/>
                        <span>Номер космической новости: {article.id}      </span>
                        <br/>
                        <Link to={`/news/${article.id}`}>
                            <h1><span>{article.title}</span></h1>
                        </Link>
                        <br/>

                        <br/>
                        <img className="imgs" src={article.imageUrl}/>
                        <br/>
                        <span>{article.summary}</span>
                        <br/>
                        <span>Дата публикации:  {article.publishedAt}</span>
                        <br/>
                        <button className="button_1"><a href={article.url}>Ссылка на статью</a></button>
                        <button onClick={() => addToFavorite(article.id)}>
                            add to favorite
                        </button>

                    </div>

                ))

            }



        </div>
    );
}

export default ZetApp