import React from 'react';
import { InfoSection } from './InfoSection/InfoSectionLandingContainer';
import { PricingBoxContent } from './PricingBox/PricingBoxLandingContainer';

export class PricingContent extends React.Component {
	render(){
		return(
			<div id="page-content">
       			<div className="container">
       				<ol className="breadcrumb">
		                <li><a href="#">Home</a></li>
		                <li><a href="#">Pages</a></li>
		                <li className="active">Pricing</li>
            		</ol>
					<section className="page-title">
               			 <h1>Pricing Plans</h1>
           			</section>
           			<InfoSection />
           			<PricingBoxContent />
				</div>
	    	</div>
		);
	}
}
