import React from 'react';
import { BreadcrumbContent } from './Breadcrumb/BreadcrumbLandingContainer';
import { SideBarContent } from './SideBar/SidebarLandingContainer';
 
export class ListingContent extends React.Component {
	render(){
		return(
			<div id="page-content">
       			<div className="container">
					<BreadcrumbContent />
					<SideBarContent/>
				</div>
	    	</div>
		);
	}
}