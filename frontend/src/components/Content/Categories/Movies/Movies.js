import React, { useState, useEffect } from 'react';
import './Movies.css';

const Movies = ({ query }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            // const response = await fetch(`http://localhost:5000/search?query=${query}`);
            // const data = await response.json();
            // setMovies(data);
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
        };

        // Fetch data only if query is not empty
        if (query.trim() !== '') {
            // fetchData();
        } else {
        // Clear search results if query is empty
            // setMovies([]);
        }
    }, [movies]);

    return (
        <div id='movies-container'>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <div key={movie.id} className='movie-item'>
                        <h3>{movie.title}</h3>
                        <p>{movie.description}</p>
                    </div>
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
};

export default Movies;
