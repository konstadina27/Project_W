import React from 'react';
import { 
    BrowserRouter as Router,
    NavLink 
} from 'react-router-dom';

export class FooterWrapper extends React.Component {
	render(){
		return(
            <Router>
    	        <div className="container">
                    <div className="vertical-aligned-elements">
                        <div className="element width-50">
                            <p data-toggle="modal" data-target="#myModal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam at neque sit amet vestibulum. 
                            <NavLink to="/terms" target="_self">Terms of Use and Privacy Policy.</NavLink></p>
                        </div>
                        <div className="element width-50 text-align-right">
                            <a href="#" className="circle-icon"><i className="social_twitter"></i></a>
                            <a href="#" className="circle-icon"><i className="social_facebook"></i></a>
                            <a href="#" className="circle-icon"><i className="social_youtube"></i></a>
                        </div>
                    </div>
                    <div className="background-wrapper">
                        <div className="bg-transfer opacity-50">
                            <img src="assets/img/footer-bg.png" alt="" />
                        </div>
                    </div>
                </div>
            </Router>
		);
	}
}

export class FooterNav extends React.Component {
	render(){
		return(
            <div className="footer-navigation">
                <div className="container">
                    <div className="vertical-aligned-elements">
                        <div className="element width-50">(C) 2016 Your Company, All right reserved</div>
                        <div className="element width-50 text-align-right">
                            <a href="index.html">Home</a>
                            <a href="listing-grid-right-sidebar.html">Listings</a>
                            <a href="submit.html">Submit Item</a>
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}