import React from 'react';

export class EventSection extends React.Component {
	render(){
		return(
			<div className="col-md-4 col-sm-4">
	            <div className="text-element event">
	                <div className="date-icon">
	                    <figure className="day">{this.props.date}</figure>
	                    <figure className="month">{this.props.month}</figure>
	                </div>
	                <h4><a href="detail.html">{this.props.evTitle}</a></h4>
	                <figure className="date"><i className="icon_clock_alt"></i>{this.props.time}</figure>
	                <p>{this.props.evText}</p>
	                <a href="detail.html" className="link arrow">More</a>
	            </div>
	        </div>
		);
	}
}