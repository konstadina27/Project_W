import React from 'react';
import { 
	HashRouter as Router,
	Route,
	Link 
} from 'react-router-dom';

export class Navbar extends React.Component {
	render() {
		return (
			<Router>
				<div>
			       	<nav>
			            <div className="left">
			                <Link to="/" className="brand"><img src="assets/img/logo.png" alt="" /></Link>
			            </div>
			            <div className="right">
			                <div className="primary-nav has-mega-menu">
			                    <ul className="navigation">
			                        <li className="active has-child"><Link to="/">Home</Link></li>
			                        <li className="mega-menu-parent has-child"><Link to="/pricing">Pricing</Link></li>
			                        <li className="has-child"><Link to="/listing">Listing</Link> </li>
			                    </ul>
			                </div>
			            </div>
			        </nav>
			     </div>
		    </Router>
		)
	}
}