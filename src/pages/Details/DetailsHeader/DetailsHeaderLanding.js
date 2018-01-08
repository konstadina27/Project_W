import React from 'react';

export class DetailsHeader extends React.Component {
	render(){
		return(
			<div>
				<section className="page-title pull-left">
	                <h1>{this.props.name}</h1>
	                <h3>{this.props.address}</h3>
	                <div className="rating-passive" data-rating={this.props.rating}>
	                    <span className="stars"></span>
	                    <span className="reviews">{this.props.reviews}</span>
	                </div>
	            </section>
	            <a href="#write-a-review" className="btn btn-primary btn-framed btn-rounded btn-light-frame icon scroll pull-right"><i className="fa fa-star"></i>Write a review</a>
			</div>
		)
	}
}