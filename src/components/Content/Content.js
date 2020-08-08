import React from 'react'


import Style from '../../anim.module.css';

function Content(props) {

  const  cardListContainerStyle ={
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '0em'
      }
    
   const   headingStyle = {
            textAlign: 'center',
            margin: '2.4em 0',
            color: '#7d613d',
            paddingBottom: '.5em',
            paddingTop: '1.2em',
            width: '250px',
            borderBottom: '10px solid #232f38'
      }

    const ContainerStyle = {
        background: '#dedede',
    }

    return (

        <div style={ContainerStyle}>
            <h2 style={headingStyle} className={Style.MoveRight} >{props.title}</h2>
            <div style={cardListContainerStyle} className={Style.MoveUp}>
                {props.listData()}
            </div>
        </div>
    )
}

export default Content
