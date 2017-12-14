import React from 'react';
import {SearchContainer} from './SearchContainer';

export class Slider extends React.Component {
	render(){
		return(
		<div className="hero-section has-background full-screen">
            <div className="wrapper">
                <div className="inner">
                    <div className="center">
                        <div className="page-title">
                            <h1>Best Deals in One Place</h1>
                            <h2>With Locations you can find the best deals in your location</h2>
                        </div>
                    </div>
                    <SearchContainer />
                </div>
            </div>
            <div className="slider">
                <div className="owl-carousel opacity-40" data-owl-nav="0" data-owl-dots="0" data-owl-autoplay="1" data-owl-fadeout="1" data-owl-loop="1">
                    <div className="image">
                        <div className="bg-transfer"><img src="assets/img/background-05.jpg" alt=""/></div>
                    </div>
                    <div className="image">
                        <div className="bg-transfer"><img src="assets/img/background-06.jpg" alt=""/></div>
                    </div>
                    <div className="image">
                        <div className="bg-transfer"><img src="assets/img/background-03.jpg" alt=""/></div>
                    </div>
                </div>
                <div className="background-wrapper">
                    <div className="background-color background-color-black"></div>
                </div>
            </div>
        </div>
    
		);
	}
}