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
    handleValueChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        this.setState({
            keyword:"",
            location:"",
            category:"Category",
            date:"",
        })
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
                    onChange={this.handleValueChange.bind(this)}/>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <select className="form-control selectpicker" name="location" 
                            onChange={this.handleValueChange.bind(this)}>
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
                            onChange={this.handleValueChange.bind(this)}>
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
                            <input type="text" className="form-control date-picker" name="date" placeholder="Event Date" 
                            onChange={this.handleValueChange.bind(this)}/>
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