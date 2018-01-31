import React from 'react';

export class SearchContainer extends React.Component {
	constructor(props){
		super(props); 

		this.state = { 
            keyword:"",
			location:"",
            category:"Category",
            date:"",
        }
	}
    handleKeywordChange(event) {
        this.setState({
            keyword: event.target.value
        })
    }
	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		})
	}
    handleCategoryChange(event) {
        this.setState({
            category: event.target.value
        })
    }
    handleDateChange(event) {
        this.setState({
            category: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
                <div className="section-title">
                    <h2>Search</h2>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="keyword" placeholder="Enter keyword" 
                    value={this.state.keyword} onChange={this.handleKeywordChange.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <select className="form-control selectpicker" name="city" 
                            value={this.state.location} onChange={this.handleLocationChange.bind(this)}>
                                <option value="">Location</option>
                                <option value="New York">New York</option>
                                <option value="Washington">Washington</option>
                                <option value="London">London</option>
                                <option value="Paris">Paris</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <select className="form-control selectpicker" name="category" 
                            value={this.state.category} onChange={this.handleCategoryChange.bind(this)}>
                                <option value="">Category</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="car rental">Car Rental</option>
                                <option value="relax">Relax</option>
                                <option value="sport">Sport</option>
                                <option value="wellness">Wellness</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control date-picker" name="min-price" placeholder="Event Date" 
                            value={this.state.date} onChange={this.handleDateChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <div className="ui-slider" id="price-slider" data-value-min="10" data-value-max="400" data-value-type="price" data-currency="$" data-currency-placement="before">
                                <div className="values clearfix">
                                    <input className="value-min" name="value-min[]" readOnly />
                                    <input className="value-max" name="value-max[]" readOnly />
                                </div>
                                <div className="element"></div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" data-ajax-response="map" data-ajax-data-file="assets/external/data_2.php" data-ajax-auto-zoom="1" className="btn btn-primary pull-right"><i className="fa fa-search"></i></button>
                </div>
            </form>
		)
	}
}