import React from 'react';

export class SearchContainer extends React.Component {
	constructor(props){
		super(props); 

		this.state = { 
			location:"",
            category:[],
            date:""
        }
	}
    handleValueChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleCategory(event){
        this.setState({
            category:[...event.target.selectedOptions].map(o => o.value)
        })
    }
    handleSubmit(event) {
        console.log(this.state);
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
                                           name="location" placeholder="Enter Location" id="address-autocomplete"
                                           onChange={this.handleValueChange.bind(this)}/>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="form-group">
                                    <select className="form-control selectpicker" name="category" multiple={true} onChange={this.handleCategory.bind(this)}>
                                        <option value="" disabled>Category</option>
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
                                    <input type="text" className="form-control date-picker" name="date" placeholder="Event Date" 
                                    onChange={this.handleValueChange.bind(this)}/>
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