import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Movies.css';

const Movies = ({ query }) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const searchQuery = query.trim() === '' ? 'all' : query;
                const response = await fetch(`http://localhost:5001/movie/${searchQuery}`, {
                    method: 'GET',
                    headers: {
                        'x-access-token': token
                    }
                });
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, [query]);

    const handleWatchMovie = (event, id) => {
        event.preventDefault();
        navigate(`/watch?m=${id}`);
    };

    return (
        <div id='movies-container'>
            {movies.length > 0 ? (
                movies.map(movie => (
                    <img
                        key={movie.hash_id}
                        className='movie-item'
                        src={movie.cover_url}
                        alt={movie.title}
                        onClick={e => handleWatchMovie(e, movie.hash_id)}
                    />
                ))
            ) : (
                <p>No movies found</p>
            )}
        </div>
    );
};

export default Movies;
