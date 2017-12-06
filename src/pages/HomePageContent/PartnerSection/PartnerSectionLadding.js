import React from 'react';
import { PartnerSectionContainer }from './PartnerSectionLaddingContainer';

export class PartnerSection extends React.Component {
	render(){
		return(
			<section className="block">
	            <div className="container">
	                <div className="center section-title opacity-40">
                   		<h5>{this.props.title}</h5>
                	</div>
                	<div className="logos">
	                	<PartnerSectionContainer img="assets/img/logo-1.png" />
	                	<PartnerSectionContainer img="assets/img/logo-2.png" />
	                	<PartnerSectionContainer img="assets/img/logo-3.png" />
	                	<PartnerSectionContainer img="assets/img/logo-4.png" />
	                	<PartnerSectionContainer img="assets/img/logo-5.png" />
	                </div>
	 			</div>
       		 </section>
		);
	}
}