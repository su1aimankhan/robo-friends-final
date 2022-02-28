import React from 'react';

function SearchBox({searchChange}) {
    console.log('SearchBox')
    return (
        <div className='pa2'>
            <input 
                onChange={searchChange} 
                className='pa3 ba b--green bg-lightest-blue' 
                type='search' 
                placeholder='search robots'
            /> 
            <h2>Search Here</h2>
        </div>
      );
}

export default SearchBox;