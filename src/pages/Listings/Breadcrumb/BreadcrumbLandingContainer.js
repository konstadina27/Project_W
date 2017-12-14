import React from 'react';

export class BreadcrumbContent extends React.Component {
	render(){
		return(
			<div>
	       		<ol className="breadcrumb">
			        <li><a href="#">Home</a></li>
			        <li><a href="#">Pages</a></li>
			        <li className="active">Listing</li>
	            </ol>
	        </div>

		);
	}
}