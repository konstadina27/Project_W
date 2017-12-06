import React from 'react';

export class PromotedSectionContainer extends React.Component {
	render(){
		const infoClass = "hidden" || "visible";
		return(
			<div className="item featured" data-id={this.props.dataId}>
			  <a href="detail.html">
			    <div className="description">
			        <figure>{this.props.spInfo}
			        	<span className = {this.props.infoClass}>
			        		<span><i className="fa fa-calendar"></i>{this.props.infoClassCal}</span>
                        	<span><i className="fa fa-clock-o"></i>{this.props.infoClassClo}</span>
                        </span>
			        </figure>
			        <div className="label label-default">{this.props.type}</div>
			        <h3>{this.props.name}</h3>
			        <h4>{this.props.address}</h4>
			    </div>
			    <div className="image bg-transfer">
			        <img src={this.props.img} alt="" />
			    </div>
			  </a>
			  <div className="additional-info">
			    <div className="rating-passive" data-rating={this.props.dataRating}>
			      <span className="stars"></span>
			      <span className="reviews">{this.props.rData}</span>
			    </div>
			    <div className="controls-more">
			       <ul>
			         <li><a href="#">Add to favorites</a></li>
			         <li><a href="#">Add to watchlist</a></li>
			         <li><a href="#" className="quick-detail">Quick detail</a></li>
			        </ul>
			    </div>
			   </div>
			</div>
		);
	}
}