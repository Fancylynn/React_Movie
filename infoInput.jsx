function Application() {
    return (
        <div>
            <h1>My favorite movie</h1>
            
            <!--navigate bar -- link to different pages-->
            <nav>
                <a href="favoriteMovieList.html">Update my favorite movie</a>
                <a href="dataRetrive.html">My movie list</a>
            </nav>
            
            <!-- Input form -->
            <form method="post" action="submit_confirm.html" onsubmit="infoUpdate()">
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
                <input type="submit" value="Submit" />
                <input type="reset" value="Reset" />
            </fieldset>
            </form>
        </div>
    );
    
}

ReactDOM.render(<Application />, document.getElementById('container'));
