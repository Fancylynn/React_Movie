import * as MoviesActionTypes from '../actiontypes/movies';

const movies = JSON.parse(localStorage.getItem('movies')) || [];

const initialState = {
		movies: JSON.parse(localStorage.getItem('movies')) || [],
		id: (JSON.parse(localStorage.getItem('movies')) || []).length,
		display: "inputForm",
};

export default function Movies(state = initialState, action) {
	switch(action.type) {
		case MoviesActionTypes.DATA_INPUT:
			state.display = "inputForm";
			return state;

		case MoviesActionTypes.DATA_RETRIEVE:
			state.display = "dataRetrieve";
			return state;

		case MoviesActionTypes.ADD_MOVIE:
			state.movies.push({
	            key: state.id + 1,
	            title: title,
	            yearOfRelease: parseInt(year),
	            director: director,
	            poster: poster,
	        });
	        localStorage.setItem("movies", JSON.stringify(state.movies));
	        state.id = state.id + 1;
	       	state.display = "dataRetrieve"; 
			return state;

		default: 
			return state;
	}
}
