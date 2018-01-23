import React from 'react';
import {ListingContainer} from './Listing/ListingLandingContainer';
import {PageNav} from '../../components/PageNav/PageNav';

export class MyListingContent extends React.Component {
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
	            <section className="page-title">
	                <h1>My Listings</h1>
	            </section>
	            <section>
	                <ListingContainer />
	            </section>
			    <PageNav />
	       	</div>
	    </div>
		)
	}
}

	            