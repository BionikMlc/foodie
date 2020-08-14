import React from 'react'


import Anim from '../../anim.module.css';
import Styles from './Content.module.css';

function Content(props) {
    const headingStyle = Anim.MoveRight+' '+Styles.HeadingStyle;
    const cardListContainerStyle = Anim.MoveUp+' '+Styles.CardListContainerStyle;

    return (

        <div className={Styles.ContainerStyle}>
            <h2 className={headingStyle} >{props.title}</h2>
            <div className={cardListContainerStyle}>
                {props.listData()}
            </div>
        </div>
    )
}

export default Content
