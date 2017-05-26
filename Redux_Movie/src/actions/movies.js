import * as MoviesActionTypes from '../actiontypes/movies';

export const dataInput = () => {
	return {
		type: MoviesActionTypes.DATA_INPUT
	};
};

export const dataRetrieve = () => {
	return {
		type: MoviesActionTypes.DATA_RETRIEVE
	};
};

export const onMovieAdd = (title, year, director, poster) => {
	return {
		type: MoviesActionTypes.ADD_MOVIE,
		title,
		year,
		director,
		poster
	};
};