import React from 'react'
import {Link} from "react-router-dom";
import style from './MealCard.module.css';
import anim from '../../anim.module.css';

function MealCard(props) {
    const {title,img,id} = props.mealData;
    const css = style.MealCard+' '+anim.MoveUp;
      return  props.isCat ? (
            <Link to={`/categories/${title}`}  className={css}>
                <img  src={img} alt="food img"/>
                <h2>{title}</h2>
            </Link>) :  
            ( 
            <Link to={`/meals/${id}`}  className={css}>
                <img  src={img} alt="food img"/>
                <h2>{title}</h2>
            </Link> )

}

export default MealCard
