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
                    <section>
                        <div className="center">
                            <nav aria-label="Page navigation">
                                <ul className="pagination">
                                    <li className="disabled previous">
                                        <a href="#" aria-label="Previous">
                                            <i className="arrow_left"></i>
                                        </a>
                                    </li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li className="active"><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li className="next">
                                        <a href="#" aria-label="Next">
                                            <i className="arrow_right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
	    	</div>
		);
	}
}