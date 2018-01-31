import React from 'react';

export class SearchContainer extends React.Component {
	constructor(props){
		super(props); 

		this.state = { 
			location:"",
            category:"",
            date:""
        }
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
            date: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state.category +" "+this.state.location);
        event.preventDefault();
      }
	render(){
		return(
			<div className="form search-form horizontal no-background">
                <div className="container">
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" 
                                           name="keyword" placeholder="Enter Location" id="address-autocomplete"
                                           value={this.state.location}
                                           onChange={this.handleLocationChange.bind(this)}/>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <select className="form-control selectpicker" name="category"  value={this.state.category} onChange={this.handleCategoryChange.bind(this)}>
                                        <option value="">Category</option>
                                        <option value="Restaurant">Restaurant</option>
                                        <option value="Event">Event</option>
                                        <option value="Adrenaline">Adrenaline</option>
                                        <option value="Sport">Sport</option>
                                        <option value="Wellness">Wellness</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-4">
                                <div className="form-group">
                                    <input type="text" className="form-control date-picker" name="min-price" placeholder="Event Date" 
                                    value={this.state.date} onChange={this.handleDateChange}/>
                                </div>
                            </div>
                            <div className="col-md-1 col-sm-4">
                                <div className="form-group">
                                    <button type="submit" value="Submit" className="btn btn-primary pull-right"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                     </form>
                </div>
            </div>
		)
	}
}