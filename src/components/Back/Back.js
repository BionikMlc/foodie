import React from 'react'

import style from './Back.module.css';
import anim from '../../anim.module.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Back(props) {

    const css = style.Back+' '+anim.Expand+' ';//+style.show;
    return (
            <button className={css} onClick={props.clickHandler}>
                Categories
            </button>
        
    )
}

export default Back
