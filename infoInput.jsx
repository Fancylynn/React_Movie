function Header(props) {
    return(
        <div className="header">
            <h1>My Favorite Movie</h1>
        </div>
    );
}

var displayItem = React.createClass({
    render: function() {
        return (
            <div>
                <tr>
                    <td>{this.props.movie.title}</td>
                    <td>{this.props.movie.yearOfRelease}</td>
                    <td>{this.props.movie.director}</td>
                    <td>{this.props.movie.poster}</td>
                </tr>
            </div>
        )
    },
});

var Application = React.createClass ({
    propTypes: {
        display: React.PropTypes.string,
//        movies: React.PropTypes.arrayOf(React.PropTypes.shape({
//                title: React.PropTypes.string,
//                yearOfRelease: React.PropTypes.number,
//                director: React.PropTypes.string,
//                poster: React.PropTypes.string,
//                }))
    },
    
    getInitialState: function () {
        return {
            display: "inputForm",
            movies: this.props.movies,
        }
    },
    
    dataInput: function(e) {
        this.setState({
            display: "inputForm",    
        })
    },
    
    dataRetrieve: function(e) {
        this.setState({
            display: "dataRetrieve",    
        })
    },
    
    updateInfo: function(e) {
        var movies = this.props.movies;
        var movie = {};
        movie.title = document.getElementById("title").value;
        movie.yearOfRelease = document.getElementById("yearOfRelease").value;
        movie.director = document.getElementById("director").value;
        movie.poster = document.getElementById("poster").value;
        //console.log(movie);
        movies.push(movie);
        localStorage.setItem("movies", JSON.stringify(movies));
        console.log(JSON.parse(localStorage.getItem('movies')));
        //alert("perfect" + localStorage.length);
        this.setState({ movies:movies });
    },
    
    render: function () {
        let show;
        if (this.state.display === "inputForm") {
            show = (
                <div>
                    <Header />
                    <nav>
                        <button onClick={this.dataInput} className="input">Update my favorite movie</button> 
                        <button onClick={this.dataRetrieve} className="retrieve">My movie list</button> 
                    </nav>
                    <fieldset>
                        <legend>Enter basic information</legend>
                        Movie Title <input type="text" id="title" name="title" size="100" maxlength="100" placeholder="Please input the name of the movie" required />
                        <br />
                        Year of Release <input type="number" id="yearOfRelease" name="yearOfRelease" placeholder="When was the movie published" />
                        <br />
                        Director <input type="text" id="director" name="director" size="100" maxlength="100" placeholder="Who directed the movie" />
                        <br />
                        Poster Link <input type="url" id="poster" name="poster" />
                        <br />
                        <button onClick={this.updateInfo}>Submit</button>
                        <button>Reset</button>
                    </fieldset>

                </div>
            )} 
        else {
            show = (
                <div>
                    <Header />
                    <nav>
                        <button onClick={this.dataInput}>Update my favorite movie</button> 
                        <button onClick={this.dataRetrieve}>My movie list</button> 
                    </nav>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year of Release</th>
                                <th>Director</th>
                                <th>Poster</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(function(movie) {
                                return <displayItem movie={movie} />
                            }.bind(this))}
                        </tbody>
                    </table>
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
