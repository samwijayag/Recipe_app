import React from 'react';

const Search = ({search,onInputChange,onInputSubmit}) => {
	return(
		<div>
			<form className='search-form' onSubmit= {onInputSubmit}>
				<input 
					onChange = {onInputChange}
					value = {search}
					className='search-bar' 
					type='text'
				/>
				<button 

					className='search-button' 
					type='submit'>Search
				</button>
			</form>
		</div>
	)
}

export default Search;
