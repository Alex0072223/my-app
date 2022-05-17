import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import { render} from "react-dom";
import {createRoot} from "react-dom/client";




const Search = ({idSearch}) => {
    const [article, setArticle] = useState();

    useEffect(() => {
        const fetchData = async () => {

            const response = await  fetch(`https://api.spaceflightnewsapi.net/v3/articles?id=`+idSearch);

            const article = (await  response.json())[0];
            setArticle(article)

        }

        fetchData();
    })



    return(
       <div>

           <br/>
           <span>Номер космической новости: </span>
           <Link to={`/news/${article?.id}`}>
               <h1><span>{article?.title}</span></h1>
           </Link>
           <br/>
           <h2>{article?.title}</h2>
           <br/>
           <br/>



       </div>
    );
}

export default Search