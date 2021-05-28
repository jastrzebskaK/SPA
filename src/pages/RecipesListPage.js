import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/RecipesListPage.css'


const recipes = ['Carrot soup ' , 'Sweet potatoe and chili ' , 'Spinach quiche ']

const RecipesListPage = () => {

    const list = recipes.map(recipes =>
        <li key={recipes}>
            <Link to={`/recipes/${recipes}`}>{recipes}</Link>
        </li>)
    return (
        
        <div className="recipes">
            <h3>Healthy recipes for everyone!</h3>
            <div>
                <ul>
                    {list}
                </ul>
            </div>


        </div>

   
    
    )

    };


export default RecipesListPage;