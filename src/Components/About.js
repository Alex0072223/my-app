import React, {Component} from 'react';
import {Link} from "react-router-dom";

const About = () => {

        return (
            <div>
                <ul>
                    <li><Link to={'/bookmarks'}><h5>Избранное</h5></Link></li>
                    <li><Link to={'/'}><h5>Назад</h5></Link></li>
                </ul>
                <h1> About page here!</h1>
                <p>
                    3-rd year student of PSUTI
                </p>

            </div>
        );

}

export default About;