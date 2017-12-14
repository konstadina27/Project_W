import React from 'react';

export class PricingBoxDescription extends React.Component {
	render(){
		return(
			<div className="col-md-3 col-sm-3">
                <div className="pricing box description">
                    <h2 className="opacity-30">Package</h2>
                        <ul>
                            <li>Email Support</li>
                           	<li>Phone Support</li>
                            <li>Monthly Access to Online Training</li>
                            <li>Consultation Hours</li>
                            <li>Profile Builder</li>
                        </ul>
                </div>
            </div>
		);

	}
}
export class PricingBox extends React.Component {

	render(){

	
		return(
			<div>

				<div className="col-md-3 col-sm-3">
			                <div className={this.props.classCont}>
			                    <h2>{this.props.title}</h2>
			                    <figure>{this.props.price}</figure>
			                    <ul>
			                        <li className="available"><i className={this.props.email}></i></li>
			                        <li className="available"><i className={this.props.phone}></i></li>
			                        <li className="not-available"><i className={this.props.monthly}></i></li>
			                        <li> {this.props.time}</li>
			                        <li className="not-available"><i className={this.props.profile}></i></li>
			                    </ul>
			                    <a href="#" className={this.props.btnClass}>Select</a>
			                </div>
			            </div>


           	</div>
		)
	}
}	