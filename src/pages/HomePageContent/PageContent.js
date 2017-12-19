import React from 'react';
import { Slider } from './Slider/Slider';
import { BlockRecentContainer } from './BlockRecent/BlockRecentLandingContainer';
import { Listings } from './Listing/ListingLadding';
import { SubSection } from './SubSection/SubSectionLanding';
import { PromotedSectionContainer } from './Promoted/PromotedSectionLandingContainer';
import { EventSectionContainer } from './EventSection/EventSectionLandingContainer';
import { RatedSectionContainer } from './RatedSection/RatedSectionLandingContainer';
import { BlogSectionContainer } from './BlogSection/BlogSectionLandingContainer';
import { PartnerSectionContainer } from './PartnerSection/PartnerSectionLandingContainer';


export class PageContent extends React.Component {
	render(){
		return(
			<div id="page-content">
				<Slider />
				<BlockRecentContainer />
				<div className="container"><hr /></div>
				<Listings />
				<SubSection title="Subscribe and be notified about new locations"/>
				<PromotedSectionContainer title="Promoted Locations" bTitle="Promote yours" />
				<EventSectionContainer title="Events Near You" />
				<RatedSectionContainer title="Recently Rated Items" cTitle="Client’s Word"/>
				<BlogSectionContainer />
				<div className="container"><hr /></div>
				<PartnerSectionContainer title="Partners"/>
			</div>
		);
	}
}