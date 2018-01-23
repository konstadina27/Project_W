import React from 'react';
 
export class RecentSection extends React.Component {
	render(){
		return(
			<div className="item" data-id="1" key= {this.props.id}> 
				<figure className={this.props.ribbon}>Top</figure>
	        	<a href="detail.html">
			        <div className="description" >
			            <figure>{this.props.info}</figure>
			            <div className="label label-default">{this.props.type}</div>
			            <h3>{this.props.name}</h3>
			            <h4>{this.props.address}</h4>
			        </div>
			        <div className="image bg-transfer">
			            <img src={this.props.img} alt="" />
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