import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ExercisePage from '../pages/ExercisePage';
import RecipePage from '../pages/RecipePage';
import RecipesListPage from '../pages/RecipesListPage'
import SigninPage from '../pages/SigninPage';




const Page = () => {
    return (
      <>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/exercise"  component={ExercisePage} />
        <Route path="/recipes"  component={RecipesListPage} />
        <Route path="/recipes/:id"  component={RecipePage} />
        <Route path="/signin"  component={SigninPage} />

    

        </Switch>

      </>
    )
}


export default Page;