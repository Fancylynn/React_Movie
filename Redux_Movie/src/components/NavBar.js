import React, { PropTypes } from 'react';

const NavBar = props => { 
    return(
        <nav className="navbar">
            <button onClick={() => {props.changeDisplayMode("dataInput")}}>Update my favorite movie</button> 
            <button onClick={() => {props.changeDisplayMode("dataRetrieve")}}>My movie list</button> 
        </nav>
    );   
}

NavBar.propTypes = {
    changeDisplayMode: PropTypes.func.isRequired,    
};

export default NavBar;