import React,{useEffect, useState} from 'react'; 
import './App.css';
import Recipe from './recipe';


function App() {
  const APP_ID='57f2d84d';
  const APP_KEY='a5365a4df6dce5227d52cb8b880fa991';

  const [recipes, setRecipes]= useState([]);
  const [search, setSearch]=useState("");
  const [query, setquery]=useState('chicken');

 useEffect(()=>{
getrecipes();
}, [query])

 const getrecipes=async()=>{
    const response=await fetch(`https://api.edamam.com/search?q={query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data= await response.json()  
    setRecipes(data.hits)
    console.log(data.hits);
  }

const updateSearch=e=>{
  setSearch(e.target.value)
}

const getsearch=e=>{
  e.preventDefault();
  setquery(search); 
  setSearch("");

}

  return (
    <div className="App">
      <h1 id="hbros"> Hello bros</h1>

      <form onSubmit={getsearch} className="search-form">
        <input className="search-bar" type='text' value={search} onChange={updateSearch}/> 
        <button className="search-button">search</button>
      </form>

      {recipes.map(individual_recipe=>(
        <Recipe  
        key={individual_recipe.recipe.label} 
        title={individual_recipe.recipe.label} 
        cals={individual_recipe.recipe.calories}
        image={individual_recipe.recipe.image}
        ingredients={individual_recipe.recipe.ingredients}
        />
      ))}

    </div> 
  );
}

export default App;
