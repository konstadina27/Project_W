import React from 'react';

export class AboutListing extends React.Component {
	render(){
		return(
		<div>
            <div id="gallery-nav"></div>
            <section>
                <h2>{this.props.title}</h2>
                <p>
                   {this.props.mainT}
                </p>
                <p>
                    {this.props.secT}
                </p>
            </section>
            <section>
            	<h2>Features</h2>
                <ul className="tags">
                    <li>Wi-Fi</li>
                    <li>Parking</li>
                    <li>TV</li>
                    <li>Alcohol</li>
                    <li>Vegetarian</li>
                    <li>Take-out</li>
                    <li>Balcony</li>
                </ul>
            </section>
            <section>
                <div className="row">
                    <div className="col-md-5">
                        <h2>Music Equipment</h2>
                        <ul className="tags">
                            <li>Sound system</li>
                            <li>Dj Equipment</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h2>Hosting</h2>
                        <ul className="tags">
                            <li>Reception</li>
                            <li>Ceremony</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Cost/Person</h2>
                        <ul className="tags">
                            <li>10€/Per</li>
                        </ul>
                    </div>
                </div>
            </section>
		</div>
		)
	}
}