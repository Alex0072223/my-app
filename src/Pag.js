import React,{useState,useEffect} from "react";
import NewsPag from "./Components/NewsPag";
import Pagination from "./Components/Pagination";
import {Link} from "react-router-dom";
import Card from "./Components/Card";
import ZetApp from "./Components/ZetApp";
import Search from "./Components/Search";

//TODO: /bookmarks передать newss

function Pag(){
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState(10)
    const [idSearch,setIdSearch] = useState("");




    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)

            const response = await  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=50');
            const articles = await  response.json();
            setNews(articles)

            setLoading(false)
            
        }

        fetchData();


    },[])




    const addo = idSearch => {
        console.log(idSearch)
    };
    
    

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

    const paginate= pageNumber => setCurrentPage(pageNumber)


    return(
        <div className="">
            <ul>
                <li><Link to={'/transfer'}><h5>На главную (Transfer page)</h5></Link></li>
                <li><Link to={'/sort'}><h5>Сортировка по id</h5></Link></li>
            </ul>
            <input
                type="text"
                onChange={event => {
                    setIdSearch(event.target.value);
                }}
            />
            <button onClick={() => addo(idSearch)}>Чек</button>


            <Search idSearch={idSearch}/>
            <ZetApp news={currentNews} loading={loading}/>
            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/>


        </div>
    )

}

export default Pag