import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MoviesActionCreators from '../actions/movies';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';

// const movies = JSON.parse(localStorage.getItem('movies')) || [];

class MyMovies extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired,
        display: PropTypes.string.isRequired,
    };
        
    render() {
        const { dispatch, movies, display } = this.props;
        const changeDisplayMode = bindActionCreators(MoviesActionCreators.changeDisplayMode, dispatch);
        const onMovieAdd = bindActionCreators(MoviesActionCreators.onMovieAdd, dispatch);
        
        let pageDisplay;
        if (display === "dataInput") {
            pageDisplay = (
                <AddMovieForm onAdd={onMovieAdd} />
            )
        } 
        else {
            pageDisplay = (
                <MovieList movies = {movies}/>        
            )
        }
        
        return (
            <div>
                <Header />
                <NavBar changeDisplayMode={changeDisplayMode} />
                { pageDisplay }
            </div>
            
        );
    }
}

const mapStateToProps = state => (
    {
        display: state.display,
        movies: state.movies
    }
);

export default connect(mapStateToProps)(MyMovies);