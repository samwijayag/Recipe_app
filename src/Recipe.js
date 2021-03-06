import React from 'react';

const Recipe = ({title,calories,image, ingredients}) =>{
	return(
		<div className='recipe-box'>
			<h1>{title}</h1>
			<ul>
				{ingredients.map(ingredient=>(
					<li>{ingredient.text}</li>
				))}
			</ul>
			<p>{calories}</p>
			<img src={image} alt=''></img>
		</div>
	)
}

export default Recipe;