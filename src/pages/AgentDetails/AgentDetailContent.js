import React from 'react';
import {AgentInfoContainer} from './AgentInfo/AgentInfoLandingContainer';
import {FeaturedListingContainer} from './FeaturedListings/FeaturedListingLandingContainer';
import {ServicesContainer} from './Services/ServicesLandingContainer';
import {ListingContainer} from './Listings/ListingLandingContainer';
import {SearchFormContent} from '../../components/Search/SearchFormLanding';
import {CarouselContainer} from './Carousel/CarouselContainer';
import {RecentSectionContainer} from '../../components/RecentSection/RecentSectionLandingContainer';
import {ReviewsForm} from './ReviewsContact/ReviewForm';
import {ContactForm} from './ReviewsContact/ContactForm';

export class AgentDetailsContent extends React.Component {
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
	            <div className="row">
	            	<div className="col-md-9 col-sm-9">
	            		<div className="col-md-7 col-sm-7">
							<div className="col-md-3 col-sm-2">	
							    <div className="review">
							      	<div className="image">
								        <div className="bg-transfer">
								            <img src="assets/img/person-01.jpg" alt="" />
									    </div>
							        </div>
							    </div>
							</div>
							<div className="col-md-5 col-sm-5">
							    <div className="page-title">
							        <h1>Jane Doe</h1>  
							    </div>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-3">
			            <a href="#write-a-review" className="btn btn-primary btn-framed btn-rounded btn-light-frame icon scroll pull-right"><i className="fa fa-star"></i>Write a review</a>
	                </div>
				</div>
			</div>
			<CarouselContainer />
			<div className="container">
           		<div className="row">
           			<div className="col-md-7 col-sm-7">
			   			<div id="gallery-nav"></div>
			   		</div>
			   	</div>
			 </div>
			<div className="container">
           		<div className="row">
			       	<div className="col-md-9 col-sm-9">
			       		<AgentInfoContainer />
		            </div>
					<div className="col-md-3 col-sm-3">
	                    <aside className="sidebar">
	                    	<section>
	                            <h2>Search Filter</h2>
	                            <SearchFormContent />
	                        </section>
	                    </aside>
	                </div>
			    </div>
           		<div className="row">
			       	<div className="col-md-9 col-sm-9">
				       	<section>
	                       	<h2>My Listings</h2>
	                       	<section>
							    <h3>Featured Listings</h3>
							    <div className="row">
							       	<FeaturedListingContainer />
							    </div>
							</section>
                        </section>
		            </div>
					<div className="col-md-3 col-sm-3">
	                    <aside className="sidebar">
	                        <section>
	                        	<h2>Recent Items</h2>
	                        	<RecentSectionContainer />
	                        </section>
	                    </aside>
	                </div>
			    </div>
			    <section>
					<h3>Services Packages</h3>
					<ServicesContainer />
				</section>			    
				<section>
					<h3>All Listings</h3>
					<ListingContainer />
				</section>
				<div className="row">
					<ReviewsForm />
					<ContactForm />
				</div>
			</div>
	    </div>
		)
	}
}


 	
	            