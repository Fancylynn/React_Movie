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
			// return {
			// 	movies: state.movies,
			// 	id: state.id,
			// 	display:"inputForm"
			// };
			var newState = Object.assign({}, state);
			newState.display = "inputForm";
			return newState;

		case MoviesActionTypes.DATA_RETRIEVE:
			// return {
			// 	movies: state.movies,
			// 	id: state.id,
			// 	display:"dataRetrieve"
			// };
			var newState = Object.assign({}, state);
			newState.display = "dataRetrieve";
			return newState;

		case MoviesActionTypes.ADD_MOVIE:
			state.movies.push({
	            key: state.id + 1,
	            title: action.title,
	            yearOfRelease: action.year,
	            director: action.director,
	            poster: action.poster,
	        });
	        localStorage.setItem("movies", JSON.stringify(state.movies));
	        state.id = state.id + 1;
	       	state.display = "dataRetrieve";
	       	var newState = Object.assign({}, state); 
			return newState;

		default: 
			return state;
	}
}
