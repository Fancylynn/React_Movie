import React, { PropTypes } from 'react'; 

const DisplayItem = props => {
    return (
        <tr>
            <td>{props.movie.title}</td>
            <td>{props.movie.yearOfRelease}</td>
            <td>{props.movie.director}</td>
            <td>{props.movie.poster}</td>
        </tr>
    );
}

const MovieList = props => {
    return (
        <table style={{ border: 1 }} >
             <thead>
                 <tr>
                     <th>Title</th>
                     <th>Year of Release</th>
                     <th>Director</th>
                     <th>Poster</th>
                 </tr>
             </thead>                    
            <tbody>
                { props.movies.map(function(movie) {
                    return (<DisplayItem movie={movie} key={movie.title} />)
                })}
            </tbody>
        </table>
    );
}

MovieList.propTypes = {
    movies: React.PropTypes.array.isRequired,
};

export default MovieList;