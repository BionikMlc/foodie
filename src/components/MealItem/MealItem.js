import React from 'react'
import  {MealItemContainer,MealItemImg,MealItemIngList,MealItemTitle,MealItemText} from './MealItem.module.css';
import { withRouter } from 'react-router-dom';

function MealItem(props) {
    console.log(props);
    return (
        <div>
            <div className={MealItemContainer}>
                <h1 className={MealItemTitle}>Meal Title</h1>
                <div className={MealItemImg}><img src="https://w.wallhaven.cc/full/wy/wallhaven-wyz8z6.jpg" alt=""/></div>
                <h2>ingredients</h2>
                <ul className={MealItemIngList}>
                    <li><span>1</span>item</li>
                    <li><span>2</span>item</li>
                    <li><span>3</span>item</li>
                    <li><span>4</span>item</li>
                    <li><span>5</span>item</li>
                    <li><span>6</span>item</li>
                </ul>
                <h2>instructions</h2>
                <p className={MealItemText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nobis, consectetur, magni quae facilis dolorum ducimus quibusdam natus velit porro ea enim totam eligendi voluptates, rerum aut deserunt ab. Sit accusantium, deleniti at provident laudantium molestias soluta! Ducimus qui commodi accusamus reprehenderit temporibus magni nostrum dolorum doloribus neque.</p>
            </div>
        </div>
    )
}

export default withRouter(MealItem)
