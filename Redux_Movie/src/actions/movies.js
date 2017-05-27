import * as MoviesActionTypes from '../actiontypes/movies';

export const changeDisplayMode = (mode) => {
	return {
		type: MoviesActionTypes.CHANGE_DISPLAY_MODE,
		mode
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