function Header(props) {
    return(
        <div>
            <h1>My Favorite Movie</h1>
        </div>
    );
}


var Application = React.createClass ({
    propTypes: {
        display: React.PropTypes.string,
    },
    
    getInitialState: function () {
        return {
            display: "inputForm",
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
        var movie = {};
            movie.title = document.getElementById("title").value;
            movie.yearOfRelease = document.getElementById("yearOfRelease").value;
            movie.director = document.getElementById("director").value;
            movie.poster = document.getElementById("poster").value;
            //console.log(movie);
            localStorage.setItem(localStorage.length + 1, JSON.stringify(movie));
            console.log(JSON.parse(localStorage.getItem('movie')));
            //alert("perfect" + localStorage.length);   
    },
    
    render: function () {
        let show;
        if (this.state.display === "inputForm") {
            show = (
                <div>
                    <Header />
                    <nav>
                        <button onClick={this.dataInput}>Update my favorite movie</button> 
                        <button onClick={this.dataRetrieve}>My movie list</button> 
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
                        <tbody id="movie_list">
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


ReactDOM.render(<Application />, document.getElementById('container'));
