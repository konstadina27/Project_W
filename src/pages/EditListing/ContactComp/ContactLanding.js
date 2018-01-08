import React from 'react';
 
export class ContactContent extends React.Component {
	render(){
		return(
		    <section>
		        <h3>Contact</h3>
		        <div className="row">
		            <div className="col-md-6 col-sm-6">
		                <div className="form-group">
		                    <label htmlFor="address-autocomplete">Address</label>
		                    <input type="text" className="form-control" name="address" id="address-autocomplete" value="63 Birch Street, London" />
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
		                    <select className="form-control selectpicker" name="region" id="region">
		                        <option value="3">London</option>
		                        <option value="">Select Region</option>
		                        <option value="1">New York</option>
		                        <option value="2">Washington</option>
		                        <option value="4">Paris</option>
		                    </select>
		                </div>
		                <div className="form-group">
		                    <label htmlFor="phone">Listing Phone</label>
		                    <input type="text" className="form-control" name="phone" id="phone" value="361-492-2356" />
		                </div>
		                <div className="form-group">
		                    <label htmlFor="email">Listing Email</label>
		                    <input type="email" className="form-control" name="email" id="email" value="hello@markys.com" />
		                </div>
		                <div className="form-group">
		                    <label htmlFor="website">Listing Website</label>
		                    <input type="text" className="form-control" name="website" id="website" value="http://www.markys.com" />
		                </div>
		            </div>
		        </div>
		    </section>
		)
	}
}