import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <header className=" site-header">
            <Link to="/" className="header__heading"><h1 className="site-heading">Red Ant Comics</h1></Link>
            <Link to="/favourite"><button className="favourites-toggle js-favourites-toggle"></button></Link>
            </header>
        </div>
    )
}

export default Header
