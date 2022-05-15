import React, {Component, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Sort from "./Components/Sort";
import Card from "./Components/Card";

function FilterAndFav(){
    const [newss, setNewss] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState(10)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const response = await  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=50');
            const articles = await  response.json();
            setNewss(articles)
            setLoading(false)


        }

        fetchData();


    },[])

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = newss.slice(firstNewsIndex, lastNewsIndex)




    return(
        <div className="Testing">
            <br/>

            <Card news ={currentNews} />

        </div>

    );
}

export default FilterAndFav;