import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header/HeaderLadding';
import { PageContent } from './pages/HomePageContent/PageContent';
import { PricingContent } from './pages/Pricing/PricingPageContent';
import { FooterContainer } from './components/Footer/FooterLadding';
import { ListingContent } from './pages/Listings/LinstingPageContent';
import { 
	HashRouter as Router,
	Route,
} from 'react-router-dom';


ReactDOM.render(
	<div>
		<Header />
		<Router>
			<div>
				<Route exact path="/" component={PageContent} />
			    <Route path="/pricing" component={PricingContent} />
			    <Route path="/listing" component={ListingContent} />
			</div>
		</Router>
		<div className="page-wrapper">
			<FooterContainer />
		</div>
	</div>
, document.getElementById('react-container'));

