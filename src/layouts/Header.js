import React from 'react';
import {Route, Switch} from 'react-router-dom';
import "../styles/Header.css";

import header1 from '../images/1.jpg';
import header2 from '../images/2.jpg';
import header3 from '../images/3.jpg';
import header4 from '../images/4.jpg';



const Header = () => {
    return (
     <> 
     <Switch>
         <Route path="/" exact render={() => (
             <img src={header1} alt="healthy" /> )} />
        <Route path ="/exercise" render ={() =>
        (<img src={header2} alt="exercise" /> )} />
        <Route path ="/recipes" render ={() =>
        (<img src={header3} alt="recipes" /> )} />
         <Route path ="/signin" render ={() =>
        (<img src={header4} alt="signin" /> )} />
        <Route render={()=> (
           <img src={header1} alt="healthy" /> )}/>
        


         
     </Switch>
        
    </>
          
        
   );
}


export default Header;