import React from 'react';
import { Slider } from './Slider/Slider';
import { BlockRecent } from './BlockRecent/BlockRecentLadding';
import { Listings } from './Listing/ListingLadding';
import { SubSection } from './SubSection/SubSectionLadding';
import { PromotedSection } from './Promoted/PromotedSectionLadding';
import { EventSection } from './EventSection/EventSectionLadding';
import { RatedSection } from './RatedSection/RatedSectionLadding';
import { BlogSection } from './BlogSection/BlogSectionLadding';
import { PartnerSection } from './PartnerSection/PartnerSectionLadding';


export class PageContent extends React.Component {
	render(){
		return(
		<div id="page-content">
			<Slider />
			<BlockRecent />
			<div className="container"><hr /></div>
			<Listings />
			<SubSection title="Subscribe and be notified about new locations"/>
			<PromotedSection title="Promoted Locations" bTitle="Promote yours" />
			<EventSection title="Events Near You" />
			<RatedSection title="Recently Rated Items" cTitle="Client’s Word"/>
			<BlogSection />
			<div className="container"><hr /></div>
			<PartnerSection title="Partners"/>
		</div>
    
		);
	}
}