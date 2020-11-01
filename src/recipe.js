import React from 'react'

const recipe =({title,cals,image, ingredients}) =>{
    return (
        <div className="container"> 
            <h1 id="title">{title} </h1>
            <p>{cals}</p>
            <ol>
                {ingredients.map(individual_ingredients=>(
                    <li>{individual_ingredients.text}</li>
                ))}
            </ol>    
            <img src={image}/>    
        </div>
    )
}

export default recipe;