import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Testing from "./Testing";

const TransferPage = () => {

    return (
        <div>
            <div>
                <ul>
                    <li><Link className="aboutLink" to="/about" >About author page</Link></li>
                    <li><Link className="newsLink" to="/" >News test page </Link></li>
                    <li><Link className="sortLink" to="/sort"> Sorted By Id news</Link></li>
                    <li><Link className="pagLink" to="/pag">News with pagination</Link></li>
                    <li><Link className="filter" to="/filter">News with filter</Link></li>
                </ul>
            </div>

            <h1> Main transfer!</h1>

        </div>
    );


}


export default TransferPage;