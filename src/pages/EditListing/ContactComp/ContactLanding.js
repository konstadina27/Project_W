import React from 'react';
 
export class ContactContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			address:"",
			region:"Region",
			phone:"",
			email:"",
			website:""
		}
	}
	handleAddress(event){
		this.setState({
			address: event.target.value
		})
	}
		handleRegion(event){
		this.setState({
			region: event.target.value
		})
	}
		handlePhone(event){
		this.setState({
			phone: event.target.value
		})
	}
		handleEmail(event){
		this.setState({
			email: event.target.value
		})
	}
		handleWebsite(event){
		this.setState({
			website: event.target.value
		})
	}
	render(){
		return(
		    <section>
		        <h3>Contact</h3>
		        <div className="row">
		            <div className="col-md-6 col-sm-6">
		                <div className="form-group">
		                    <label htmlFor="address-autocomplete">Address</label>
		                    <input type="text" className="form-control" name="address" id="address-autocomplete" 
		                    value={this.state.address} onChange={this.handleAddress.bind(this)}/>
		                </div>
		                <div className="map height-200px shadow" id="map-submit"></div>
		                <div className="form-group hidden">
		                    <input type="text" className="form-control" id="latitude" name="latitude" hidden="" />
		                    <input type="text" className="form-control" id="longitude" name="longitude" hidden="" />
		                </div>
		                <p className="note">Enter the exact address or drag the map marker to position</p>
		            </div>
		            <div className="col-md-6 col-sm-6">
		                <div className="form-group">
		                    <label htmlFor="region">Listing Region</label>
		                    <select className="form-control selectpicker" name="region" id="region" 
		                    	value={this.state.region} onChange={this.handleRegion.bind(this)}>
		                    	<option value="">Region</option>
		                        <option value="London">London</option>
		                        <option value="New York">New York</option>
		                        <option value="Washington">Washington</option>
		                        <option value="Paris">Paris</option>
		                    </select>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="phone">Listing Phone</label>
		                    <input type="text" className="form-control" name="phone" id="phone" 
		                    value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="email">Listing Email</label>
		                    <input type="email" className="form-control" name="email" id="email" 
		                    value={this.state.email} onChange={this.handleEmail.bind(this)}/>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="website">Listing Website</label>
		                    <input type="text" className="form-control" name="website" id="website" value={this.state.website} onChange={this.handleWebsite.bind(this)}/>
		                </div>
		            </div>
		        </div>
		    </section>
		)
	}
}