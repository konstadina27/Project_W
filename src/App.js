import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './components/Header/Navbar';
import { PageContent } from './pages/HomePageContent/PageContent';
import { PageResultContent } from './pages/HomePageResultContent/PageResultContent';
import { PricingContent } from './pages/Pricing/PricingPageContent';
import { ListingContent } from './pages/Listings/ListingPageContent';
import { ProfileContent } from './pages/ProfilePage/ProfileContent';
import { ProfileContentView } from './pages/ProfilePageView/ProfileViewContent';
import { RegisterContent } from './pages/Register/RegisterContent';
import { SignInContent } from './pages/SignIn/SignInContent';
import { EditListingContent } from './pages/EditListing/EditListingContent';
import { FooterContainer } from './components/Footer/FooterLandingContainer';
import { Listing } from './pages/Details/DetailsContent';
import { Contact } from './pages/Contact/ContactContent';
import { TermsCondContent } from './pages/Terms-Conditions/TermsCondContent';
import { ResetPasswordContent } from './pages/ResetPassword/ResetPasswordContent';
import { ReviewsContent } from './pages/Reviews/ReviewsContent';
import { FaqContent } from './pages/Faq/FaqContent';
import { AgentListingContent } from './pages/AgentListing/AgentListingContent';
import { AgentDetailsContent } from './pages/AgentDetails/AgentDetailContent';
import { ErrorPageContent } from './pages/404/ErrorPageContent';
import { BlogContent } from './pages/Blog/BlogContent';
import { BlogDetailsContent } from './pages/BlogDetails/BlogDetailsContent';
import { MyListingContent } from './pages/MyListing/MyListingContent';




import { 
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()

ReactDOM.render(
	<div>
		<Router>
			<div>
				<Navbar />
				<Route exact path="/" component={PageContent}  history={history}/>
				<Route path="/home-results" component={PageResultContent}  history={history}/>
			    <Route path="/pricing" component={PricingContent}  history={history}/>
			    <Route path="/listing" component={ListingContent}  history={history}/>
			    <Route path="/profile" component={ProfileContent}  history={history}/>
			    <Route path="/profile-view" component={ProfileContentView}  history={history}/>
			    <Route path="/register" component={RegisterContent}  history={history}/>
			    <Route path="/signIN" component={SignInContent}  history={history}/>
			    <Route path="/editlisting" component={EditListingContent} history={history}/>
			    <Route path="/listing-details" component={Listing}  history={history}/>
			    <Route path="/contact" component={Contact}  history={history}/>
			    <Route path="/terms" component={TermsCondContent} history={history} />
			    <Route path='/reset-password' component={ResetPasswordContent} history={history} />
			    <Route path='/reviews' component={ReviewsContent} history={history} />
			    <Route path='/faq' component={FaqContent} history={history} />
			    <Route path='/agentListing' component={AgentListingContent} history={history} />
			    <Route path='/agentDetails' component={AgentDetailsContent} history={history} />
			    <Route path='/errorPage' component={ErrorPageContent} history={history} />
			    <Route path='/blog' component={BlogContent} history={history} />
			    <Route path='/blog-details' component={BlogDetailsContent} history={history} />
			    <Route path='/my-listing' component={MyListingContent} history={history} />
			</div>
		</Router>
		<div className="page-wrapper">
			<FooterContainer />
		</div>
	</div>
, document.getElementById('react-container'));

