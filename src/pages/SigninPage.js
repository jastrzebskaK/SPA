import React from 'react';
import '../styles/Signin.css';

const signinPage = () => {
    return (  

        <div className="login">
            <label htmlFor="">LOGIN<input type="text"/> </label><br/>
            <label htmlFor="">PASSWORD<input type="password"/> </label><br/>
            <button>SIGN IN</button>
            
        </div>
    );
}
 
export default signinPage;