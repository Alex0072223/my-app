import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes,Outlet, Navigate} from "react-router-dom";
import About from "./Components/About";
import Testing from "./Testing";
import TransferPage from "./TransferPage";
import NewsItem from "./Components/NewsItem";
import Sorted from "./Sorted";
import Error from "./Error";
import Pag from "./Pag";
import FilterAndFav from "./FilterAndFav";

// TODO: Сделать кнпку сортировки на news + кнопка на transferPage...
// TODO: Добавить в :id похожие новости (3, параметр )
// TODO: Накинуть стили
// <Route path="/" element={<TransferPage />}/>

ReactDOM.render(

    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Navigate to="/news" />}/> {/*Redirect*/}
            <Route path='news' element={<Outlet />}/>
                   <Route index element={<Testing/>}/>
                       <Route path="/news/:iddd" element={<NewsItem />}/>
            <Route/>

            <Route path="news" element={<Testing />}/>
            <Route path="about" element={<About />}/>
            <Route path="sort" element={<Sorted />}/>
            <Route path="transfer" element={<TransferPage />}/>
            <Route path="pag" element={<Pag />}/>
            <Route path="filter" element={<FilterAndFav />}/>

            <Route path="*" element={<Error />}/> {/*redirect to news if usever use wrong url*/}

        </Routes>
    </BrowserRouter>,

    // <App />,

  document.getElementById('root')
);
