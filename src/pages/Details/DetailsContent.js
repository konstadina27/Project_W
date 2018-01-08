import React from 'react';
import {DetailsHeaderContainer} from './DetailsHeader/DetailsHeaderLandingContainer';
import {CarouselContainer} from './Carousel/CarouselContainer';
import {AboutListingContainer} from './AboutListing/AboutListingLandingContainer';

export class Listing extends React.Component {
	render(){
		return(
			<div id="page-content">
		        <div className="container">
		            <ol className="breadcrumb">
		                <li><a href="#">Home</a></li>
		                <li><a href="#">Pages</a></li>
		                <li className="active">Contact</li>
		            </ol>
		            <DetailsHeaderContainer/>
		        </div>
		        <CarouselContainer />
		       	<div className="container">
           			<div className="row">
           				<div className="col-md-7 col-sm-7">
			        		<AboutListingContainer />
			        	</div>
			        </div>
			    </div>
		    </div>
		)
	}
}