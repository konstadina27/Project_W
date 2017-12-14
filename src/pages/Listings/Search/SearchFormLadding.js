import React from 'react';

export class SearchFormContent extends React.Component {
	render(){
		return(
                        <section>
                            <h2>Search Filter</h2>
                            <form className="form inputs-underline">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="keyword" placeholder="Enter keyword" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control selectpicker" name="location">
                                        <option value="">Location</option>
                                            <option value="1">New York</option>
                                            <option value="2">Washington</option>
                                            <option value="3">London</option>
                                            <option value="4">Paris</option>
                                    </select>
                                </div>
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
                                <div className="form-group">
                                    <input type="text" className="form-control date-picker" name="min-price" placeholder="Event Date" />
                                </div>
                                <div className="form-group">
                                    <div className="ui-slider" id="price-slider" data-value-min="10" data-value-max="400" data-value-type="price" data-currency="$" data-currency-placement="before">
                                        <div className="values clearfix">
                                            <input className="value-min" name="value-min[]" readOnly />
                                            <input className="value-max" name="value-max[]" readOnly />
                                        </div>
                                        <div className="element"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary pull-right">Search Now<i className="fa fa-search"></i></button>
                                </div>
                            </form>
                        </section>
		);
	}
}