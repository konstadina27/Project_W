import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/Header/Navbar';
import { PageContent } from './pages/HomePageContent/PageContent';
import { PricingContent } from './pages/Pricing/PricingPageContent';
import { ListingContent } from './pages/Listings/ListingPageContent';
import { ProfileContent } from './pages/ProfilePage/ProfileContent';
import { ProfileContentView } from './pages/ProfilePageView/ProfileViewContent';
import { RegisterContent } from './pages/Register/RegisterContent';
import { SignInContent } from './pages/SignIn/SignInContent';
import { EditListingContent } from './pages/EditListing/EditListingContent';
import { FooterContainer } from './components/Footer/FooterLandingContainer';
import { Listing } from './pages/Details/DetailsContent';


import { 
	BrowserRouter as Router,
	Route,
	NavLink
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

ReactDOM.render(
	<div>
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={PageContent}  history={history}/>
			    <Route path="/pricing" component={PricingContent}  history={history}/>
			    <Route path="/listing" component={ListingContent}  history={history}/>
			    <Route path="/profile" component={ProfileContent}  history={history}/>
			    <Route path="/profile-view" component={ProfileContentView}  history={history}/>
			    <Route path="/register" component={RegisterContent}  history={history}/>
			    <Route path="/signIN" component={SignInContent}  history={history}/>
			    <Route path="/editlisting" component={EditListingContent}  history={history}/>
			    <Route path="/listing-details" component={Listing}  history={history}/>
			</div>
		</Router>
		<div className="page-wrapper">
			<FooterContainer />
		</div>
	</div>
, document.getElementById('react-container'));

