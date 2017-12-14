import React from 'react';
import { Slider } from './Slider/Slider';
import { BlockRecentContainer } from './BlockRecent/BlockRecentLandingContainer';
import { Listings } from './Listing/ListingLadding';
import { SubSection } from './SubSection/SubSectionLadding';
import { PromotedSectionContainer } from './Promoted/PromotedSectionLandingContainer';
import { EventSection } from './EventSection/EventSectionLadding';
import { RatedSectionContainer } from './RatedSection/RatedSectionLandingContainer';
import { BlogSectionContainer } from './BlogSection/BlogSectionLandingContainer';
import { PartnerSection } from './PartnerSection/PartnerSectionLadding';


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
				<EventSection title="Events Near You" />
				<RatedSectionContainer title="Recently Rated Items" cTitle="Client’s Word"/>
				<BlogSectionContainer />
				<div className="container"><hr /></div>
				<PartnerSection title="Partners"/>
			</div>
		);
	}
}