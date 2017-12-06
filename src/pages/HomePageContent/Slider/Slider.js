import React from 'react';

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

                    <div className="form search-form horizontal no-background">
                        <div className="container">
                            <form>
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="keyword" placeholder="Enter Location" id="address-autocomplete" />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="form-group">
                                            <select className="form-control selectpicker" name="category">
                                                <option value="">Category</option>
                                                <option value="1">Restaurant</option>
                                                <option value="2">Event</option>
                                                <option value="3">Adrenaline</option>
                                                <option value="4">Sport</option>
                                                <option value="5">Wellness</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-4">
                                        <div className="form-group">
                                            <input type="text" className="form-control date-picker" name="min-price" placeholder="Event Date" />
                                        </div>
                                    </div>
                                    <div className="col-md-1 col-sm-4">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary pull-right"><i className="fa fa-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
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