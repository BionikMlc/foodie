import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



import PropTypes from 'prop-types'

import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MealCard from './components/MealCard/MealCard';
import Content from './components/Content/Content.js';
import Back from './components/Back/Back.js';
import Home from './components/Home/Home.js';
import MealItem from './components/MealItem/MealItem';





export class App extends Component {
  // static propTypes = {

  // }
  state = {
    mealData: [],
    prevData:[],
    title: 'Categories',
    show: false
  }


  backClickHandler = (e)=>{
    this.setState({
      mealData: [...this.state.prevData],
      title: 'Categories'
    });
  }

  listContents(){
    const mealData = this.state.mealData;
    const mealList = mealData != null ? mealData.map(item => {
      let data = {};
       data = {
        title: item.title,
        id:    item.id,
        img:   item.img,
      }
      return  <MealCard  mealData={data} key={data.id} />
    }): null;

    return mealList;

  }

  fetchData(url,name)
  {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      const categories = data.categories.map(item=>{
        return {
          title: item.strCategory,
          id:    item.idCategory,
          img:   item.strCategoryThumb
        }
      });
      this.setState({
        mealData: [...categories],
        prevData: [...categories],
        title: 'Categories'
      });
    });
  }

  componentDidMount(){
    this.fetchData('https://www.themealdb.com/api/json/v1/1/categories.php','categories');

  }

  searchItem = (searchVal)=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchVal)
    .then(res => res.json())
    .then(data => {
      if(data.meals != null){
        const searchData =  data.meals.map(item=>{
        return {
          title: item.strMeal,
          id:    item.idMeal,
          img:   item.strMealThumb
        }
      });
      this.setState({
        mealData: [...searchData],
        title: 'Search Results'
      });
      }

    });
  }

    
  
  render() {
    //load data when state is not empty
    return (
      <div>
        <Header />
        <Router>
        <Route path='/meals'>
           <MealItem />
          </Route>
          <Route exact path='/'>
            <Search  searchItem={this.searchItem} />
            {this.state.title === 'Search Results'? <Back clickHandler={this.backClickHandler} />:null}
            <Home  title={this.state.title}  listData={this.listContents.bind(this)} />
          </Route>

        </Router>
      </div>
    )
  }
}








export default App;
