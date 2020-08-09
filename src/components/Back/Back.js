import React from 'react'

import style from './Back.module.css';
import anim from '../../anim.module.css';
import { Link } from 'react-router-dom';

function Back(props) {

    const css = style.Back+' '+anim.Expand+' ';//+style.show;
    return (
            <Link to={'/'}  className={css} onClick={props.clickHandler}>
                Categories
            </Link>
    )
}

export default Back
