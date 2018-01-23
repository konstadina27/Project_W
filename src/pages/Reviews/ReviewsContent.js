import React from 'react';
import {ReviewContainer} from './Review/ReviewLandingContainer'

export class ReviewsContent extends React.Component {
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
	                <h1>Reviews</h1>
	            </section>
	            <section className="reviews">
	            	<ReviewContainer />
	            </section>
	            <section className="center">
                	<a href="" className="btn btn-primary btn-light-frame btn-rounded btn-framed btn-large">Load More</a>
            	</section>
	       	</div>
	    </div>
		)
	}
}