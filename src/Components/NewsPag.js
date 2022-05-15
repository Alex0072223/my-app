import React from "react";

const NewsPag = ({news, loading}) => {

   if(loading){
      return <h2>Loading...</h2>
   }

   return(
       <ul className="list-group mb-2">
          {
             news.map((oneNews,i) =>(
                 <li>
                    <br/>
                    {oneNews.id}
                    <br/>
                    {oneNews.title}
                    <br/>
                    <img className="imgs" src={oneNews.imageUrl}/>
                 </li>
                 ))
          }
       </ul>
   );
}

export default NewsPag