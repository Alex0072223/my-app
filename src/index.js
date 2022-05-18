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
import Bookmarks from "./Bookmarks";

// <Route path="/" element={<TransferPage />}/>
{/*<Route path="news" element={<Testing />}/>*/}

ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="/news" />}/> {/*Redirect*/}
            <Route path='news' element={<Outlet />}/>
                   <Route index element={<Pag/>}/>
                       <Route path="/news/:iddd" element={<NewsItem />}/>
            <Route/>

            <Route path="news" element={<Pag />}/>
            <Route path="about" element={<About />}/>
            <Route path="sort" element={<Sorted />}/>
            {/*<Route path="transfer" element={<TransferPage />}/>*/}
           {/* <Route path="pag" element={<Pag />}/>*/}
            <Route path="filter" element={<FilterAndFav />}/>
            <Route path="bookmarks" element={<Bookmarks />}/>

            <Route path="*" element={<Error />}/> {/*redirect to news if usever use wrong url*/}

        </Routes>
    </BrowserRouter>,

    // <App />,

  document.getElementById('root')
);
