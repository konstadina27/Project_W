import React from 'react';

export class AgentListing extends React.Component {
	render(){
		return(
		    <div className="col-md-4 col-sm-6">
		        <div className="subject-list">
		            <figure className={this.props.ribbonClass}>{this.props.ribbonT}</figure>
		            <a href="agent-detail.html" className="image">
		                <div className="bg-transfer disable-on-mobile">
		                    <img src={this.props.img} alt="" />
		                </div>
		            </a>
		            <div className="description">
		                <section className="name">
		                    <h3><a href="agent-detail.html">{this.props.name}</a></h3>
		                    <h4>{this.props.listCount}</h4>
		                </section>
		                <section className="contacts">
		                    <figure><i className="fa fa-phone"></i>{this.props.phone}</figure>
		                    <figure><a href="#"><i className="fa fa-envelope"></i>{this.props.email}</a></figure>
		                </section>
		                <section className="social">
		                    <a href="#"><i className="social_twitter"></i></a>
		                    <a href="#"><i className="social_facebook"></i></a>
		                    <a href="#"><i className="social_youtube"></i></a>
		                </section>
		            </div>
		        </div>
		    </div>
		)
	}
}