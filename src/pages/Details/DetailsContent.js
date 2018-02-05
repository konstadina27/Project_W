import React from 'react';
import {DetailsHeaderContainer} from './DetailsHeader/DetailsHeaderLandingContainer';
import {CarouselContainer} from './Carousel/CarouselContainer';
import {AboutListingContainer} from './AboutListing/AboutListingLandingContainer';
import {ReviewsContainer} from './Reviews/ReviewsLandingContainer';
import {ReviewsForm} from './Reviews/ReviewForm';
import {CeremonyContainer} from './Ceremony/CeremonyLandingContainer';
import {SideBarContainer} from './SideBar/SideBarLandingContainer';

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
			        		<section>
                				<h2>Reviews</h2>
			        			<ReviewsContainer />
			        		</section>
			        		<section>
                				<h2>Ceremony Packages</h2>
			        			<CeremonyContainer />
			        		</section>
			        		<ReviewsForm />
			        	</div>
			        	<div className="col-md-5 col-sm-5">
			        		<SideBarContainer />
			        	</div>
			        </div>
			    </div>
		    </div>
		)
	}
}