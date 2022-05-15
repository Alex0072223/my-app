import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";

const NewsItem = () => {
    const { iddd } = useParams();
    const [article, setArticle] = useState();
    const [articlesSame, setArticlesSame] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const responseSame = await fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=3`);
            const response = await  fetch(`https://api.spaceflightnewsapi.net/v3/articles?id=${iddd}`);
            const articlesSame = await  responseSame.json();
            const article = (await  response.json())[0];
            setArticle(article)
            setArticlesSame(articlesSame)
        }

        fetchData();
    })

    return (
        <div>
            <br/>
            <span>Номер космической новости: {article?.id}</span>
            <br/>
            <h2>{article?.title}</h2>
            <br/>
            <img className="imgs" src={article?.imageUrl}/>
            <br/>
            <p>{article?.summary}</p>

            <br/>
            <h1>Same News</h1>

            {
                articlesSame.map(articlesSame=>(
                    <div>

                        <br/>
                             <span>Номер космической новости: {articlesSame.id - 1}</span>
                        <br/>
                        <h1>  <span>  {articlesSame.title }</span> </h1> {/*TODO: придумать как сдвинуть title*/}
                        <br/>
                        <img className="imgs" src={articlesSame.imageUrl}/>
                        <br/>


                    </div>

                ))
            }


        </div>
    )
}

export default NewsItem;