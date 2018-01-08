import React from 'react';
import { 
	BrowserRouter as Router,
	Route,
	NavLink 
} from 'react-router-dom';

export class Navbar extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<header id="page-header">
						<nav>
					        <div className="left">
					            <NavLink to="/" className="brand"><img src="assets/img/logo.png" alt="" /></NavLink>
					        </div>
					        <div className="right">
					            <div className="primary-nav has-mega-menu">
					                <ul className="navigation">
					                    <li className="active has-child"><NavLink to="/">Home</NavLink></li>
					                    <li ><NavLink to="/pricing">Pricing</NavLink></li>
					                    <li ><NavLink to="/listing">Listing</NavLink> </li>
					                    <li><NavLink to="/listing-details" className="invisible-on-mobile">Listing Details</NavLink></li>
					                    <li><NavLink to="/editListing" className="invisible-on-mobile">Edit Listing</NavLink></li>
					                    <li><NavLink to="/profile" className="invisible-on-mobile">Edit Profile</NavLink></li>
			                    		<li><NavLink to="/profile-view" className="invisible-on-mobile">View Profile</NavLink></li>
			                    		<li><NavLink to="/register" className="invisible-on-mobile">Register</NavLink></li>
			                    		<li><NavLink to="/signIn" className="invisible-on-mobile">Sign In</NavLink></li>
					                </ul>
					           </div>
					        </div>
					    </nav>
					</header>
				</div>
		    </Router>
		)
	}
}
