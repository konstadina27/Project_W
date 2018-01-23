import React from 'react';

export class InfoLanding extends React.Component {
	render(){
		return(
            <div className="col-md-3 col-sm-3">
                <h3>Contact Information</h3>
                <div className="box">
                    <address>
                        <strong>Location</strong>
                        <figure>{this.props.address}</figure>
                        <br/>
                        <strong>Phone Number</strong>
                        <figure>{this.props.phone}</figure>
                        <br/>
                        <strong>Email</strong>
                        <figure><a href="#">{this.props.email}</a></figure>
                        <br/>
                        <strong>Customer Care</strong>
                        <figure><a href="#">{this.props.customCare}</a></figure>
                    </address>
                </div>
            </div>
		)
	}
}