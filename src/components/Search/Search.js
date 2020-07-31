import React,{useState} from 'react'
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
import style from './Search.module.css'


function Search(props) {
    const [inputValue,setInputValue] = useState(null);
    const formHandler = (e)=> {
        e.preventDefault();
        props.searchItem(inputValue);


    }

    const changeHandler = (e)=>{
         setInputValue(e.target.value);
    }

    return (
        <div className={style.Search}>
            <h2 className={style.SearchHeader}>search recpies</h2>
            <form  onSubmit={formHandler}>
                <input onChange={changeHandler} className={style.SearchBox} placeholder='Search By Recpie Name' type="text" />
            </form>
        </div>
    )
}

export default Search
