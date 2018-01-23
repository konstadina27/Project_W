import React from 'react';
import {WelcomeMess} from './WelcomeMess';
import {CookiesCont} from './CookiesCont';
import {LicenceCont} from './LicenceCont';
import {UserCommContent} from './UserCommContent';
import {ReservationRightsContent} from './ReservationRightsContent';
import {RemoveLinksContent} from './RemoveLinksContent';
import {SearchFormContent} from '../../components/Search/SearchFormLanding';
import {RecentSectionContainer} from '../../components/RecentSection/RecentSectionLandingContainer';

export class TermsCondContent extends React.Component {
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
	                <h1>Terms and Conditions</h1>
	            </section>
	            <div className="row">
               		<div className="col-md-9 col-sm-9">
               			<WelcomeMess />
               			<CookiesCont />
               			<LicenceCont />
               			<UserCommContent />
               			<ReservationRightsContent />
               			<RemoveLinksContent />
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
	       	</div>
	    </div>
		)
	}
}