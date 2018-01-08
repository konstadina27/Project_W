import React from 'react';

export class SideBar extends React.Component {
	render(){
		return(
		<div>
			<div className="detail-sidebar">
                <section className="shadow">
                    <div className="map height-250px" id="map-detail"></div>
                    <div className="content">
                        <div className="vertical-aligned-elements">
                            <div className="element"><img src="assets/img/logo-2.png" alt="" /></div>
                            <div className="element text-align-right"><a href="#" className="btn btn-primary btn-rounded btn-xs">Claim</a></div>
                        </div>
                        <hr />
                        <address>
                            <figure><i className="fa fa-map-marker"></i>{this.props.address} </figure>
                            <figure><i className="fa fa-envelope"></i><a href="#">{this.props.email}</a></figure>
                            <figure><i className="fa fa-phone"></i>{this.props.phone}</figure>
                            <figure><i className="fa fa-globe"></i><a href="#">{this.props.site}</a></figure>
                        </address>
                    </div>
                </section>
                <section>
                    <h2>Opening Hours</h2>
                    <dl>
                        <dt>Monday</dt>
                        <dd>08:00am - 11:00pm</dd>
                        <dt>Tuesday</dt>
                        <dd>08:00am - 11:00pm</dd>
                        <dt>Wednesday</dt>
                        <dd>12:00am - 11:00pm</dd>
                        <dt>Thursday</dt>
	                    <dd>08:00am - 11:00pm</dd>
                        <dt>Friday</dt>
                        <dd>03:00pm - 02:00am</dd>
                        <dt>Saturday</dt>
                        <dd>03:00pm - 02:00am</dd>
                        <dt>Sunday</dt>
                        <dd>Closed</dd>
                    </dl>
                </section>
                <section>
                    <h2>Share This Listing</h2>
                    <div className="social-share"></div>
                </section>
            </div>
		</div>
		)
	}
}