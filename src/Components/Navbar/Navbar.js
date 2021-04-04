import React from 'react';
import './Navbar.css';
import logo_music from './music.png';

const Navbar = ({setGenreId, setPage}) => {

    //States
    
    //Events
    const changePageHandler = (e) => {
        setGenreId(e.target.value);
        setPage(1);
    }

    // JSX
    return(
        <div className="nav_container">
            <div className="logo">
                <img className="music_logo" src={logo_music} alt="icon"/>
                <span>Music</span>
            </div>

            <div className="dropdown_box">
                <select name="genre" id="genre" onChange={changePageHandler} >
                    <option value="g.115">Pop</option>
                    <option value="g.146">HipHop</option>
                    <option value="g.5">Rock</option>
                </select>
            </div>
        </div>
    );

};

export default Navbar;