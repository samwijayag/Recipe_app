import React, {useEffect, useState} from 'react';
import './App.css';
import Search from './Search';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '8f01e666';
  const APP_KEY = '639123217a4eafda4d7e27ea5a043062'

  const [recipes, setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  const onInputChange = (e) => {
    setSearch(e.target.value)
  }

  const onInputSubmit = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return(
    <div className='App'>
      <h1>Recipe App</h1>
      <Search 
        search={search} 
        onInputChange={onInputChange}
        onInputSubmit = {onInputSubmit}
      />
      <div className='recipe'>
        {recipes.map(recipe => (
            <Recipe 
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image = {recipe.recipe.image}
              ingredients = {recipe.recipe.ingredients}
            />
          ))}
      </div>
    </div>
  )
}

export default App;
