import React from 'react';

export class SearchFormContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            keyword:"",
            location:"Location",
            category:""
        }
    }
    handleChangeKeyword(event){
        this.setState({
            keyword:event.target.value
        })
    }
    handleChangeLocation(event){
        this.setState({
            location:event.target.value
        })
    }
    handleChangeCategory(event){
        this.setState({
            category:event.target.value
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
                        value={this.state.keyword} onChange={this.handleChangeKeyword.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control selectpicker" name="location" 
                        value={this.state.location} onChange={this.handleChangeLocation.bind(this)}>
                            <option value="">Location</option>
                            <option value="New York">New York</option>
                            <option value="Washington">Washington</option>
                            <option value="London">London</option>
                            <option value="Paris">Paris</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <select className="form-control selectpicker" name="category"
                        value={this.state.category} onChange={this.handleChangeCategory.bind(this)}>
                            <option value="">Category</option>
                            <option value="Restaurant">Restaurant</option>
                            <option value="Event">Event</option>
                            <option value="Adrenaline">Adrenaline</option>
                            <option value="Sport">Sport</option>
                            <option value="Wellness">Wellness</option>
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
            </div>
		);
	}
}