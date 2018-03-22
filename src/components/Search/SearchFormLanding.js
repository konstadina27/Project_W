import React from 'react';

export class SearchFormContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            keyword:"",
            location:"Location",
            category:"",
            date:"",
            valueMin:"",
            valueMax:""
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
            <div>
                <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keyword" placeholder="Enter keyword" 
                        onChange={this.handleValueChange.bind(this)}/>
                    </div>
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
                    <div className="form-group">
                        <select className="form-control selectpicker" name="category" multiple={true}
                        onChange={this.handleCategory.bind(this)}>
                            <option value="" disabled>Category</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Event">Event</option>
                            <option value="Adrenaline">Adrenaline</option>
                            <option value="Sport">Sport</option>
                            <option value="Wellness">Wellness</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control date-picker" name="min-price" placeholder="Event Date" 
                        onChange={this.handleValueChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <div className="ui-slider" id="price-slider" data-value-min="20" data-value-max="400" data-value-type="price" data-currency="$" data-currency-placement="before">
                            <div className="values clearfix">
                                <input className="value-min" name="valueMin" onChange={this.handleValueChange.bind(this)}/>
                                <input className="value-max" name="valueMax" onChange={this.handleValueChange.bind(this)}/>
                            </div>
                            <div className="element"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary pull-right">Search Now<i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
		);
	}
}