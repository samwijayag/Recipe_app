import React from 'react';

const Search = () => {
	return(
		<div>
			<form>
				<input 
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
