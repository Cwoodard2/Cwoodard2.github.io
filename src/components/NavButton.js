import React from "react";
import { Link } from "react-router-dom";
import './NavButton.css';
import homeImage from '../Images/home-icon.png';

export default function NavButton(props) {
    var pagePointer = props.page;
    var toPage = props.thisPage;
    var style = props.thisStyle;
    
    return (
        <Link to={pagePointer}>
            <button className={style}>{toPage}</button>
        </Link>
    );
}