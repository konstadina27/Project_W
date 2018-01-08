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
		</div>
		)
	}
}