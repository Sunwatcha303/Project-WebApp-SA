import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../../../../utils/config';
import './Movies.css';

const Movies = ({ query , isSearch}) => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const searchQuery = query.trim() === '' ? 'all' : query;
                const response = await fetch(`${config.apiUrl}/movie/${searchQuery}`, {
                    method: 'GET',
                    headers: {
                        'x-access-token': token,
                        'x-api-key': config.apiKey,
                    }
                });
                if(response.status === 401 || response.status === 400){
                    localStorage.removeItem('token');
                    navigate('/signin');
                    return;
                }
                else if(response.status === 204){
                    setMovies([]);
                }
                else{
                    const data = await response.json();
                    setMovies(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const fetchDataSearch = async () => {
            try {
                const token = localStorage.getItem('token');
                const searchQuery = query.trim() === '' ? 'all' : query;
                const response = await fetch(`${config.apiUrl}/movie/search/${searchQuery}`, {
                    method: 'GET',
                    headers: {
                        'x-access-token': token,
                        'x-api-key': config.apiKey,
                    }
                });
                if(response.status === 401 || response.status === 400){
                    localStorage.removeItem('token');
                    navigate('/signin');
                    return;
                }
                else if(response.status === 204){
                    setMovies([]);
                }
                else{
                    const data = await response.json();
                    setMovies(data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if(isSearch){
            fetchDataSearch();
        }else{
            fetchData();
        }
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
