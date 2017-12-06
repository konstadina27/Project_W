import React from 'react';

export class BlockRecentContainer extends React.Component {
	render(){
		const containerClass = "col-md-3 col-sm-3" || "col-md-6 col-sm-6" || "col-md-4 col-sm-4" || "col-md-5 col-sm-5";
		const checkClass = "circle hidden" || "circle";
		const ribbonClass = "ribbon" || "ribbon hidden";
		return(
            <div className={this.props.containerClass}>
              <div className="item" data-id={this.props.dataId}>
                <figure className={this.props.ribbonClass}>Top</figure>
                <a href="detail.html">
	                <div className="description">
	                  <figure>{this.props.spInfo}</figure>
	                  <div className="label label-default">{this.props.type}</div>
	 	              <h3>{this.props.name}</h3>
			          <h4>{this.props.address}</h4>
		            </div>
			        <div className="image bg-transfer">
			            <img src={this.props.img} alt=""/>
			        </div>
		        </a>
		        <div className="additional-info">
		           <figure className={this.props.checkClass} title="Featured"><i className="fa fa-check"></i></figure>
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
		    </div>
		);
	}
}