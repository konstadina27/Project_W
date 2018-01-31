import React from 'react';
import {SearchContainer} from './SearchContainer';

export class Slider extends React.Component {
	render(){
		return(
		    <div className="hero-section full-screen has-map has-sidebar sidebar-grid">
                <div className="map-wrapper">
                    <div className="geo-location">
                        <i className="fa fa-map-marker"></i>
                    </div>
                <div className="map" id="map-homepage"></div>
                </div>
                <div className="results-wrapper">
                    <div className="sidebar-detail">
                        <div className="tse-scrollable">
                            <div className="tse-content">
                                <div className="sidebar-wrapper"></div>
                            </div>
                        </div>
                    </div>
                    <div className="form search-form inputs-underline">
                        <SearchContainer />
                    </div>
                    <div className="results">
                        <div className="tse-scrollable">
                            <div className="tse-content">
                                <div className="section-title">
                                    <h2>Search Results<span className="results-number"></span></h2>
                                </div>
                                <div className="results-content"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
		);
	}
}