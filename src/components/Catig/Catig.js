import React,{useState} from 'react'
import Search from '../Search/Search'
import Back from '../Back/Back'
import Content from '../Content/Content'
import MealCard from '../MealCard/MealCard';
import { withRouter } from 'react-router-dom'

function Catig(props) {
    const [mealData,setMealData] = useState([]);
    const listData = ()=> {
     fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
          const mealData = data.meals.map(item=>{
            return {
              title: item.strMeal,
              id:    item.idMeal,
              img:   item.strMealThumb
            }
          });

          const mealList =  mealData.map(item => {
            let data = {};
             data = {
              title: item.title,
              id:    item.id,
              img:   item.img,
            }
            return  <MealCard isCat={false} mealData={data} key={data.id} />
          })
          setMealData(mealList);
        });
        return mealData;
    }
    return (
        <div>
            <Search  searchItem={props.searchItem} />
            <Back    clickHandler={props.clickHandler} />
            <Content title={props.match.params.id}  listData = {listData} />
        </div>
    )
}

export default withRouter(Catig)
