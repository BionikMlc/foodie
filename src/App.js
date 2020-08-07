import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import Header from './components/Header/Header';
import Search from './components/Search/Search';
import MealCard from './components/MealCard/MealCard';
import Catig from './components/Catig/Catig';
import Back from './components/Back/Back';
import Home from './components/Home/Home';
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
      return  <MealCard isCat={this.state.title === 'Categories'} mealData={data} key={data.id} />
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
          <Switch>
            <Route path='/meals/:id'>
              <MealItem />
            </Route>
            <Route path='/categories/:id'>
              <Catig searchItem={this.searchItem} clickHandler={this.backClickHandler} />
            </Route>
            <Route exact path='/'>
              <Search  searchItem={this.searchItem} />
              {this.state.title === 'Search Results'? <Back clickHandler={this.backClickHandler} />:null}
              <Home  title={this.state.title}  listData={this.listContents.bind(this)} />
            </Route>
          </Switch>
         

        </Router>
      </div>
    )
  }
}








export default App;
