import React, {useEffect, useState} from 'react';
import './ApiSpace.css'
import './style.css'
import {Link} from "react-router-dom";
import TransferPage from "../TransferPage";

const ApiSpace = () => {

        const [articles,setArticles] = useState([]);

        useEffect(() => {

            const fetchData = async () => {
                const response = await  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=10');

                const articles = await  response.json();

                setArticles(articles)
            }

            fetchData();


        }, []);



    return (



        <div>
            <ul>
                <li><Link to={'/transfer'}><h5>На главную (Transfer page)</h5></Link></li>
                <li><Link to={'/sort'}><h5>Сортировка по id</h5></Link></li>
            </ul>

            <h2>Placeholder </h2>
            <script> </script>




            {
                articles.map(article=>(
                    <div className="article">
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

                    </div>
                ))
            }


        </div>
    )
}

export default ApiSpace;