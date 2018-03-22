import React from 'react';

export class AgentInfo extends React.Component {
	render(){
		return(
	    <section>
		    <div className="subject-detail">
		        <div className="description">
		            <section className="name">
		                <p>{this.props.desc}</p>
		            </section>
		            <section className="contacts">
		            	<figure><i className="fa fa-map-marker"></i>{this.props.address} </figure>
		                <figure><i className="fa fa-phone"></i>{this.props.phone}</figure>
		                <figure><a href="#"><i className="fa fa-envelope"></i>{this.props.email}</a></figure>
						<figure><i className="fa fa-globe"></i><a href="#">{this.props.site}</a></figure>
		            </section>
		            <section className="contacts">
			            <figure><p>Prices start at: </p><i className="fa fa-eur"></i> {this.props.price}</figure>
			            <figure><p>Availability from: </p><i className="fa fa-calendar"></i>{this.props.date}</figure>
			        </section>
		            <section className="social">
		                <a href="#"><i className="social_twitter"></i></a>
		                <a href="#"><i className="social_facebook"></i></a>
		                <a href="#"><i className="social_youtube"></i></a>
		            </section>
		        </div>
		        <div className="image">
		            <div className="map height-350px" id="map-detail"></div>
		        </div>
		    </div>
		</section>
		)
	}
}

	            