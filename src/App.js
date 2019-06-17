import React, {useEffect, useState} from 'react';
import './App.css';
import Search from './Search'

const App = () => {


  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
  }

  return(
    <div className='App'>
      <h1>Recipe App</h1>
      <Search />
    </div>
  )
}

export default App;
