import React from 'react';
import { 
	BrowserRouter as Router,
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
					                    <li className="mega-menu-parent has-child"><a href="#nav-pages">Pages</a>
											<div className="wrapper">
                                				<div className="mega-menu">
                                    				<div className="nav-wrapper" id="nav-pages">
                                        				<div className="container">
                                            				<div className="row">
                                                				<div className="col-md-3 col-sm-3">
                                                    				<h4 className="heading">General</h4>
                                                    				<ul>
                                                    					<li><NavLink to="/home-results">Home Result Page</NavLink></li>
                                                        				<li><NavLink to="/faq">Faq</NavLink></li>
                                                        				<li ><NavLink to="/pricing">Pricing</NavLink></li>
                                                        				<li ><NavLink to="/listing">Listing</NavLink> </li>
                                                        				<li><NavLink to="/editListing">Edit Listing</NavLink></li>
                                                        				<li><NavLink to="/listing-details">Listing Details</NavLink></li>
																		<li><NavLink to="/agentListing">Agent Listing</NavLink></li>
					                    								<li><NavLink to="/agentDetails">Agent Details</NavLink></li>
                                                    				</ul>
                                                				</div>
				                                                <div className="col-md-3 col-sm-3">
				                                                    <h4 className="heading">User</h4>
				                                                    <ul>
				                                                        <li><NavLink to="/profile">Profile Edit</NavLink></li>
				                                                        <li><NavLink to="/profile-view">View Profile</NavLink></li>
				                                                        <li><NavLink to="/reset-password" target="_self">Reset Password</NavLink></li>
				                                                        <li><NavLink to="/my-listing">My Listings</NavLink></li>
				                                                       <li><NavLink to="/reviews">Reviews</NavLink></li>
				                                                    </ul>
				                                                </div>
				                                               <div className="col-md-3 col-sm-3">
				                                                    <h4 className="heading">Other</h4>
				                                                    <ul>
				                                                        <li><NavLink to="/errorPage">404 Error Page</NavLink></li>
				                                                        <li><NavLink to="/terms" target="_self">Terms & Conditions</NavLink></li>
				                                                    </ul>
				                                                </div>
				                                            </div>
				                                        </div>
				                                    </div>
				                                </div>
				                            </div>
			                    		</li>
			                    		<li className="has-child"><a href="blog.html">Blog</a>
			                    			<div className="wrapper">
                                				<div id="nav-locations" className="nav-wrapper">
                                    				<ul>
							                    		<li><NavLink to="/blog">Blog</NavLink></li>
							                    		<li><NavLink to="/blog-details">Blog Details</NavLink></li>
							                    	</ul>
							                    </div>
							                </div>
							            </li>
							            <li><NavLink to="/contact">Contact</NavLink></li>
			                    	</ul>
			                    </div>
			                    <div className="secondary-nav">
			                    	<NavLink to="/signIn" target="_self">Sign In</NavLink>
				                   	<NavLink to="/register" target="_self">Register</NavLink>
				                </div>	
				                <div className="nav-btn">
				                    <i></i>
				                    <i></i>
				                    <i></i>
				                </div>			           
					        </div>
					    </nav>
					</header>
				</div>
		    </Router>
		)
	}
}

	