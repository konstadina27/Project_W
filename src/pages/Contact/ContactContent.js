import React from 'react';
import {InfoLandingContainer} from './InfoLandingContainer';
import {FormContent} from './FormContent'

export class Contact extends React.Component {
	render(){
		return(
			<div id="page-content">
		        <div className="container">
		            <ol className="breadcrumb">
		                <li><a href="#">Home</a></li>
		                <li><a href="#">Pages</a></li>
		                <li className="active">Contact</li>
		            </ol>
		            <section className="page-title">
		                <h1 className="pull-left">Contact</h1>
		                <div className="pull-right featured-contact">
		                    <i className="icon_comment_alt"></i>
		                    <h4>24/7 Support</h4>
		                    <h3>228-341-8068</h3>
		                </div>
		            </section>
		        </div>
		        <section>
		            <div className="map height-400px" id="map-contact"></div>
		        </section>
		        <section className="block">
		            <div className="container">
		                <div className="row">
		                <InfoLandingContainer />
		               	<FormContent /> 
		                </div>
				    </div>
				</section>
			</div>
		)
	}
}