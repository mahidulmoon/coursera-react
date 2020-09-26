import React from 'react';

const Image_api = "https://image.tmdb.org/t/p/w1280/";
const Movie = ({title,poster_path,overview,vote_average}) =>(
    <div className="movie">
        <img src={Image_api + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{vote_average}</span>
        </div>
        <div className="movie-over">
            <h3>Overview:</h3>
            <p>{overview}</p>
        </div>
    </div>
);


export default Movie;