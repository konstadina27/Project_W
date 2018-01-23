import React from 'react';
import { BreadcrumbContent } from './Breadcrumb/BreadcrumbLandingContainer';
import { SideBarContent } from './SideBar/SidebarLandingContainer';
import {PageNav} from '../../components/PageNav/PageNav';

 
export class ListingContent extends React.Component {
	render(){
		return(
			<div id="page-content">
       			<div className="container">
					<BreadcrumbContent />
					<SideBarContent/>
				</div>
                <PageNav />
	    	</div>
		);
	}
}