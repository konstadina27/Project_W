import React from 'react';
 
export class SocialContent extends React.Component {
	render(){
		return(
			<section>
			    <h3>Social</h3>
			    <div className="row">
			        <div className="col-md-6 col-sm-6">
			            <div className="form-group">
			                <label htmlFor="facebook">Facebook URL</label>
			                <input type="text" className="form-control" name="facebook" id="facebook" value="http://www.facebook.com/markys-restaurant" />
			            </div>
			            <div className="form-group">
			                <label htmlFor="youtube">Youtube URL</label>
			                <input type="text" className="form-control" name="youtube" id="youtube" value="http://www.youtube.com/markys-restaurant" />
			            </div>
			        </div>
			        <div className="col-md-6 col-sm-6">
			            <div className="form-group">
			                <label htmlFor="twitter">Twitter URL</label>
			                <input type="text" className="form-control" name="twitter" id="twitter" value="http://www.twitter.com/markys-restaurant" />
			            </div>
			            <div className="form-group">
			                <label htmlFor="pinterest">Pinterest URL</label>
			                <input type="text" className="form-control" name="pinterest" id="pinterest" placeholder="http://" />
			            </div>
			        </div>
			    </div>
			</section>
		)
	}
}
