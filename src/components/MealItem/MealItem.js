import React, { Component } from 'react'
import  {MealItemContainer,MealItemImg,MealItemIngList,MealItemTitle,MealItemText} from './MealItem.module.css';
import { withRouter } from 'react-router-dom';


class MealItem extends Component {

    state = {
        title: '',
        instruct: '',
        img: null,
        vid: null,
        ingredient: []
    }

    fetchMealById(id)
    {
        console.log(id);
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(mealItem =>{
            let i = 1;
            let ing = [];
            console.log(mealItem.meals);
          const mealItemData = mealItem.meals.map((meal,index) =>{
            // if(meal['strIngredient'+i] !== null && meal['strIngredient'+i] !== " ")
            //     ing.push(meal['strMeasure'+i]+" "+meal['strIngredient'+i]);

                while(i<=20){
                    if(meal['strIngredient'+i] !== null && meal['strIngredient'+i] !== "")
                           ing.push(meal['strMeasure'+i]+" "+meal['strIngredient'+i]);
                    ++i;
                }
            
            return {
              title: meal.strMeal,
              instruct: meal.strInstructions,
              img: meal.strMealThumb,
              vid: meal.strYoutube,
              ingredient: ing
            }
          });
          const ingredients = mealItemData[0].ingredient.filter(item=>(item !== " ")).map((item,index)=>{
              return <li><span>{index+1}</span>{item}</li>
          })
          console.log(ingredients)
          this.setState({
            title: mealItemData[0].title,
            instruct: mealItemData[0].instruct,
            img: mealItemData[0].img,
            vid: mealItemData[0].vid,
            ingredient: ingredients
          });
        console.log(mealItem);
  
      });
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchMealById(id);
    }

    render() {
        console.log(this.state)
        const {title,img,instruct,ingredient} = this.state;
            return (
                <div>
                    <div className={MealItemContainer}>
                        <h1 className={MealItemTitle}>{title}</h1>
                        <div className={MealItemImg}><img src={img} alt=""/></div>
                        <h2>ingredients</h2>
                        <ul className={MealItemIngList}>
                            {ingredient}
                        </ul>
                        <h2>instructions</h2>
                    <p className={MealItemText}>{instruct}</p>
                    </div>
                </div>
            )
        
    }
}

export default withRouter(MealItem)

