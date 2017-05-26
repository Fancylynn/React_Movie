import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import MyMovies from './src/containers/MyMovies';
import MoviesReducer from './src/reducers/movies';

const store = createStore (
	MoviesReducer,
	window.devToolsExtension && window.devToolsExtension()
);

render(
	<Provider store={store}>
		<MyMovies />
	</Provider>,
	document.getElementById('container')
);