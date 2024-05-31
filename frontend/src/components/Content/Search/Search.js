import React, { useState, useEffect } from 'react';

import './Search.css';

import Movies from '../Categories/Movies/Movies'

const Search = ({setIsSearchHome, setIsSearchHeader}) => {
    const [isSearchState, setIsSearchState] = useState(false);
    const [query, setQuery] = useState('');
    
    const handleSearch = (event) => {
        event.preventDefault();

        setIsSearchHome(!isSearchState);
        setIsSearchHeader(!isSearchState);
        setIsSearchState(!isSearchState);
    }

    return (
        <>
        {!isSearchState ? (
            <div className="nav-bar" id='search-icon' onClick={handleSearch}></div>
        ) : (
            <div id='search-container'>
                <div id='search-bar'>
                    <div id='search-field-container'>
                        <div className='search-nav' id='search-bar-icon' onClick={handleSearch}></div>
                        <input 
                            className='search-nav' 
                            id='search-bar-field' 
                            type="text" value={query} 
                            onChange={e => setQuery(e.target.value)}>
                        </input>
                    </div>
                    <div className='search-nav' id='logo-to-close' onClick={handleSearch}></div>
                </div>
                <div id='search-result'>
                    <Movies query={query} isSearch={true}/>
                </div>
            </div>
        )}
        </>
    );
}

export default Search;