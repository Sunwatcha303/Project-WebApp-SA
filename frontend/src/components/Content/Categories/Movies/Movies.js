import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Movies.css';

const Movies = ({ query }) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5001/movie/${query}`);
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        // Fetch data only if query is not empty
        if (query.trim() !== '') {
            fetchData();
        } else {
        // Clear search results if query is empty
            setMovies([]);
        }
    }, []);

    const handleWatchMovie = (event, id) => {
        event.preventDefault();

        navigate("/watch?m="+id);
    }

    return (
        <div id='movies-container'>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <img key={movie.hash_id} className='movie-item' src={movie.cover_url} onClick={e => handleWatchMovie(e, movie.hash_id)}>
                        
                    </img>
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
};

export default Movies;
