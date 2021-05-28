import React from 'react';


const Exercise = ({title,text}) => {
    
const styles = {

marginTop:40,
padding:10
}

return (

    <article style={styles}>
        <h2 style={{
            marginBottom:30,
            letterSpacing:2,
            display:"block",
            fontSize:12
        }}>{title}</h2>
        <p style={{fontSize:10}}> {text}</p>
    </article>
)
    }
export default Exercise;
