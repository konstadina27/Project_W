import React from 'react';
import {AgentInfo} from './AgentInfo/AgentInfo';
import {FeaturedListingContainer} from './FeaturedListings/FeaturedListingLandingContainer';
import {ListingContainer} from './Listings/ListingLandingContainer';
import {SearchFormContent} from '../../components/Search/SearchFormLanding';
import {RecentSectionContainer} from '../../components/RecentSection/RecentSectionLandingContainer';

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
			            <section className="page-title">
			                <h1>Jane Doe</h1>
			            </section>
			           	<AgentInfo />
			           	<section>
                        	<h2>My Listings</h2>
                        	<section>
							    <h3>Featured Listings</h3>
							    <div className="row">
							       	<FeaturedListingContainer />
							    </div>
							</section>
							<section>
								<h3>All Listings</h3>
								<ListingContainer />
							</section>
                        </section>
			        </div>
					<div className="col-md-3 col-sm-3">
	                    <aside className="sidebar">
                        <section>
                            <h2>Search Filter</h2>
                            <SearchFormContent />
                        </section>
                        <section>
                        	<h2>Recent Items</h2>
                        	<RecentSectionContainer />
                        </section>
	                    </aside>
	                </div>
			    </div>
	       	</div>
	    </div>
		)
	}
}

	            