import React, { PropTypes } from 'react';

const NavBar = props => { 
    return(
        <nav className="navbar">
            <button onClick={props.onInput}>Update my favorite movie</button> 
            <button onClick={props.onRetrieve}>My movie list</button> 
        </nav>
    );   
}

NavBar.propTypes = {
    onInput: PropTypes.func.isRequired,
    onRetrieve: PropTypes.func.isRequired,    
};

export default NavBar;