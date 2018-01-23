import React from 'react';
import {AgentListingContainer} from './AgentListingLandingContainer';
import {PageNav} from '../../components/PageNav/PageNav';
import {SearchFormContent} from '../../components/Search/SearchFormLanding';
import {RecentSectionContainer} from '../../components/RecentSection/RecentSectionLandingContainer';

export class AgentListingContent extends React.Component {
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
	            <div className="row">
                	<div className="col-md-9 col-sm-9">
			            <section className="page-title">
			                <h1>Agents / Persons</h1>
			            </section>
			            <section>
			            	<div className="row">
			            		<AgentListingContainer />
			            	</div>
			            </section>
			        </div>
					<div className="col-md-3 col-sm-3">
	                    <aside className="sidebar">
                        <section>
                            <h2>Search Filter</h2>
                            <SearchFormContent />
                        </section>
                        <section>
                        	<h2>Recent Items</h2>
                        	<RecentSectionContainer />
                        </section>
	                    </aside>
	                </div>
			    </div>
			    <PageNav />
	       	</div>
	    </div>
		)
	}
}

	            