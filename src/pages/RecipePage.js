import React from 'react';
import {Link} from 'react-router-dom';
import Recipes from '../components/Recipes';


const RecipePage = () => {


    return (
        <>
        <div>Recipe</div>
        <Recipes/>
        <Link to="/recipes">Go back to other recipes</Link>

        </>

    );
}

      

export default RecipePage;