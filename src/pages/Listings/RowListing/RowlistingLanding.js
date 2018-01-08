import React from 'react';

export class Rowlisting extends React.Component {
	render(){
		
		return(
			<div className="item item-row" data-id="15" data-latitude={this.props.latitude} data-longitude={this.props.longitude} key={this.props.id}>
                <figure className={this.props.ribbonClass}>{this.props.ribbonT}</figure>
                <a href="detail.html">
                    <div className="image bg-transfer">
                        <figure>{this.props.info}</figure>
                        <img src={this.props.img} alt="" />
                    </div>
                    <div className="map"></div>
                    <div className="description">
                        <h3>{this.props.name} </h3>
                        <h4>{this.props.address}</h4>
                        <div className="label label-default">{this.props.type}</div>
                    </div>
                    <div className="additional-info">
                        <div className="rating-passive" data-rating={this.props.data}>
                            <span className="stars"></span>
                            <span className="reviews">{this.props.reviews}</span>
                        </div>
                    </div>
                </a>
                <Controls />
             </div>  
		);
	}
}

export class Controls extends React.Component {
		render(){
			return(
				<div className="controls-more">
		            <ul>
		                <li><a href="#">Add to favorites</a></li>
		                <li><a href="#">Add to watchlist</a></li>
		                <li><a href="#" className="quick-detail">Quick detail</a></li>
		            </ul>
                </div>
            )
    	}
	}