import React from 'react';
import { RatedSectionContainer, RatedSectionClient }from './RatedSectionLaddingContainer';

export class RatedSection extends React.Component {
	render(){
		return(
			<section className="block">
            	<div className="container">
                	<div className="row">
                		<div className="col-md-9 col-sm-9">
	                        <div className="section-title">
	                            <h2>{this.props.title}</h2>
	                        </div>
	                        <div className="row">
	                        	<RatedSectionContainer />
	                       	</div>
	                    </div>
	                    <div className="col-md-3 col-sm-3">
	                        <div className="section-title">
	                            <h2>{this.props.cTitle}</h2>
	                        </div>
	                        <div className="testimonials center box">
                				<div className="owl-carousel" data-owl-items="1" data-owl-nav="0" data-owl-dots="1">
	                        		<RatedSectionClient img="assets/img/person-01.jpg" name="Jane Woodstock" position="CEO at ArtBrands" cText="Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel."/>
	                        		<RatedSectionClient img="assets/img/person-04.jpg" name="Peter Doe" position="CEO at ArtBrands" cText="Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales."/>
	                        	</div>
	                       	</div>
	                    </div>
                	</div>
                </div>
            </section>
		);
	}
}
