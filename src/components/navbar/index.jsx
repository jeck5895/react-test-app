import React, {Component} from 'react'
import { NavLink } from "react-router-dom"
import NavbarAvatar from '../avatars/NavbarAvatar'

const user = {
    name: 'John Doe',
    avatar_url: 'https://res.cloudinary.com/practicaldev/image/fetch/s--fv2bt1rr--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/96701/69d6c3b3-30ac-4221-8e59-9b8862fba6e7.jpeg'
};

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-success fixed-top">
            <a className="navbar-brand" href="#">Diatabs React</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active" className="nav-link" to="/">HOME <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/about-diatabs">ABOUT DIATABS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/contact-us">CONTACT US</NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </li>
                </ul>
                
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <NavbarAvatar user={user} />
                        John Doe
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Profile</a>
                    <a className="dropdown-item" href="#">Settings</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;