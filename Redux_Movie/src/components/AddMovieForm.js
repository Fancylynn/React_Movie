import React, { Component, PropTypes } from 'react';

export default class AddMovieForm extends Component {
	static propTypes: {
		onAdd: PropTypes.func.isRequired,
	};

	state = {
		title: "",
        year: "",
        director: "",
        poster: "",
	};

	onTitleChange = (e) => {
		const title = e.target.value;
        this.setState({title: title });
    };
    
    onYearChange = (e) => {
    	const year = e.target.value;
        this.setState({year: year});
    };
    
    onDirectorChange = (e) => {
    	const director = e.target.value;
        this.setState({director: director});
    };
    
    onPosterChange = (e) => {
    	const poster = e.target.value;
        this.setState({poster: poster});
    };

    onSubmit = (e) => {
        if (e) e.preventDefault();
        this.props.onAdd(this.state.title, this.state.year, this.state.director, this.state.poster);
        this.setState({ title: "", year: "", director: "", poster: "" });
    };

    render() {
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
        );
    }
}