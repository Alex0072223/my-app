import React from 'react';
import './ErrorPageStyle.css'
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <ul>
               {/* <li><Link to={'/transfer'}><h5>На главную (Transfer page)</h5></Link></li>
                <li><Link to={'/sort'}><h5>Сортировка по id</h5></Link></li>*/}
                <li><Link to={'/about'}><h5>Про автора</h5></Link></li>
                <li><Link to={'/bookmarks'}><h5>Закладки</h5></Link></li>
                <li><Link to={'/'}><h5>Новости</h5></Link></li>
            </ul>
            <h1 className="svast">404</h1>
        </div>
    );
};

export default ErrorPage;