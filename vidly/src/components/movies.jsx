import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import Like from './common/like';
class Movies extends Component {
    state ={
        movies:getMovies(),
        pageSize:4
    };
    hadleDelete = (movie) =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    };
    handleLike = (movie) =>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
    };
    handlePageChange = page =>{
        console.log(page);
    };
    render() {
        const { length: count } = this.state.movies;
        if( count=== 0){
            return (<p>There are no movies in the database</p>)
        }
        return (
            <div>
                <p>Showing {count} movies in the database </p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th/>
                            <th/>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><Like liked={movie.liked} onClick={()=>this.handleLike(movie)} /></td>
                                <td><button onClick={()=>this.hadleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination itemsCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} />
            </div>
        );
    }
}

export default Movies;