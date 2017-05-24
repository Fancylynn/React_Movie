function Header(props) {
    return(
        <div className="header">
            <h1>My Favorite Movie</h1>
        </div>
    );
}

function DisplayItem (props) {
    return (
        <tr>
            <td>{props.movie.title}</td>
            <td>{props.movie.yearOfRelease}</td>
            <td>{props.movie.director}</td>
            <td>{props.movie.poster}</td>
        </tr>
    );
}

//function NavBar(props) { 
//    return(
//        <nav className="navbar">
//            <button onClick={props.onInput}>Update my favorite movie</button> 
//            <button onClick={props.onRetrieve}>My movie list</button> 
//        </nav>
//    )   
//}
//
//NavBar.propTypes = {
//    onInput: React.PropTypes.func,
//    onRetrieve: React.PropTypes.func,    
//}

var AddMovieForm = React.createClass({
    propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    },
    
    getInitialState: function() {
        return {
            title: "",
            year: "",
            director: "",
            poster: "",
        }
    },
    
    onTitleChange: function(e) {
        this.setState({title: e.target.value})
    },
    
    onYearChange: function(e) {
        this.setState({year: e.target.value})
    },
    
    onDirectorChange: function(e) {
        this.setState({director: e.target.value})
    },
    
    onPosterChange: function(e) {
        this.setState({poster: e.target.value})
    },
    
    onSubmit: function(e) {
        e.preventDefault();
        this.props.onAdd(this.state.title, this.state.year, this.state.director, this.state.poster);
        this.setState({ title: "", year: "", director: "", poster: "" });
    },
    
    render: function() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Enter basic information</legend>
                        Movie Title <input type="text" value={this.state.title} onChange={this.onTitleChange} size="100" maxlength="100" placeholder="Please input the name of the movie" required />
                        <br />
                        Year of Release <input type="number" value={this.state.year} onChange={this.onYearChange} placeholder="When was the movie published" />
                        <br />
                        Director <input type="text" value={this.state.director} onChange={this.onDirectorChange} size="100" maxlength="100" placeholder="Who directed the movie" />
                        <br />
                        Poster Link <input type="url" value={this.state.poster} onChange={this.onPosterChange} />
                        <br />
                        <input type="submit" value="Submit" className="button"/>
                        <input type="reset" value="Reset" className="button"/>
                    </fieldset>
                    </form>
            </div>
        )
    }
});

function MovieList(props) {
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
                    return (<DisplayItem movie={movie} key={movie.key} />)
                })}
            </tbody>
        </table>
    );
}

MovieList.propTypes = {
    movies: React.PropTypes.array.isRequired,
}

var Application = React.createClass ({
    propTypes: {
        display: React.PropTypes.string,
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        year: React.PropTypes.string,
        director: React.PropTypes.string,
        poster: React.PropTypes.string,
        movies: React.PropTypes.arrayOf(React.PropTypes.shape({
                title: React.PropTypes.string,
                yearOfRelease: React.PropTypes.number,
                director: React.PropTypes.string,
                poster: React.PropTypes.string,
                key: React.PropTypes.number,
                }))
    },
    
    getInitialState: function () {
        return {
            display: "inputForm",
            movies: this.props.movies,
            id: this.props.movies.length,
        }
    },
    
    dataInput: function() {
        this.setState({
            display: "inputForm",    
        })
    },
    
    dataRetrieve: function() {
        this.setState({
            display: "dataRetrieve",    
        })
    },
    
    onMovieAdd: function(title, year, director, poster) {
        this.state.movies.push({
            key: this.state.id + 1,
            title: title,
            yearOfRelease: parseInt(year),
            director: director,
            poster: poster,
        });
        localStorage.setItem("movies", JSON.stringify(movies));
        this.setState(this.state);
        this.setState({ id: this.state.id + 1});
        this.setState({ display: "dataRetrieve"});
    },
        
    render: function () {
        let show;
        if (this.state.display === "inputForm") {
            show = (
                <div>
                    <Header />
                    <nav className="navbar">
                        <button onClick={this.dataInput} className="input">Update my favorite movie</button> 
                        <button onClick={this.dataRetrieve} className="retrieve">My movie list</button> 
                    </nav>
                    <AddMovieForm onAdd={this.onMovieAdd} />
                </div>
            )} 
        else {
            show = (
                <div>
                    <Header />
                    <nav className="navbar">
                        <button onClick={this.dataInput} className="input">Update my favorite movie</button> 
                        <button onClick={this.dataRetrieve} className="retrieve">My movie list</button> 
                    </nav>
                    <MovieList movies = {this.state.movies}/>
                </div>         
            )}
        
        return (
            <div>
                { show }
            </div>
            
        )}
});

var movies = JSON.parse(localStorage.getItem('movies')) || [];

ReactDOM.render(<Application movies={movies}/>, document.getElementById('container'));
