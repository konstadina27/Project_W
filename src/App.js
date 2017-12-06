import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/Header/HeaderLadding';
import { PageContent } from './pages/HomePageContent/PageContent';
import { FooterContainer } from './components/Footer/FooterLadding';


ReactDOM.render(
	<div>
		<Header/>
		<div className="page-wrapper">
			<PageContent />
			<FooterContainer />
		</div>
	</div>
, document.getElementById('react-container'));

