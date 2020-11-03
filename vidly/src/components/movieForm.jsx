import React from 'react';

const MovieForm = (props) =>{
    return (
        <div>
            <h1>Movie Id: {props.match.params.id}</h1>
            <button className="btn btn-primary" onClick={()=> props.history.push('/movies')} >save</button>
        </div>
    );
}

export default MovieForm;