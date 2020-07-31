import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import style from './MealCard.module.css';
import anim from '../../anim.module.css';

function MealCard(props) {
    const {title,img,id} = props.mealData;
    const css = style.MealCard+' '+anim.MoveUp;
    return (
        <Router>
        <Link to={`/meal/${id}`} className={css}>
            <img  src={img} alt="food img"/>
            <h2>{title}</h2>
        </Link>  
        </Router>

    )
}

export default MealCard
