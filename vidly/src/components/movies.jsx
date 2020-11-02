import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
import Pagination from './common/pagination';
import {paginate} from '../utils/paginate';
import ListGroup from './common/listGroup';
import {getGenres} from '../services/fakeGenreService';
import MoviesTable from './moveisTable';
import _ from 'lodash';
class Movies extends Component {
    state ={
        movies: [],
        pageSize:4,
        currentPage: 1,
        genres: [],
        sortColumn: {path: 'title', order: 'asc'}
    };
    componentDidMount(){
        this.setState({movies:getMovies(),genres:getGenres()});
    }
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
        this.setState({currentPage:page});
    };
    handleGenreSelect = genre =>{
        this.setState({selectedGenre:genre});
    }
    handleSort = path =>{
        this.setState({ sortColumn: {path,order: 'asc'} });
    };
    render() {
        const { length: count } = this.state.movies;
        const { pageSize, currentPage,selectedGenre,sortColumn , movies:allMovies} = this.state;
        if( count=== 0){
            return (<p>There are no movies in the database</p>)
        }
        const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sort = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sort,currentPage,pageSize);
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect} />
                </div>
                <div className="col">
                    <p>Showing {count} movies in the database </p>
                    <MoviesTable movies={movies} onLike={this.handleLike} onSort={this.handleSort} onDelete={this.hadleDelete} />
                    <Pagination itemsCount={filtered.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange} />
                </div>
                
            </div>
        );
    }
}

export default Movies;