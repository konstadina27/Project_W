import React from 'react';
 
export class SocialContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			facebook:"",
			youtube:"",
			twitter:"",
			pinterest:""
		}
	}
    handleChangeFacebook(event) {
        this.setState({
            facebook: event.target.value
        })
    }
    handleChangeTwitter(event) {
        this.setState({
            twitter: event.target.value
        })
    }
    handleChangePinterest(event) {
        this.setState({
            pinterest: event.target.value
        })
    }
    handleChangeYoutube(event) {
        this.setState({
            youtube: event.target.value
        })
    }
	render(){
		return(
			<section>
			    <h3>Social</h3>
			    <div className="row">
			        <div className="col-md-6 col-sm-6">
			            <div className="form-group">
			                <label htmlFor="facebook">Facebook URL</label>
			                <input type="text" className="form-control" name="facebook" id="facebook"
			                 value={this.state.facebook} onChange={this.handleChangeFacebook.bind(this)} />
			            </div>
			            <div className="form-group">
			                <label htmlFor="youtube">Youtube URL</label>
			                <input type="text" className="form-control" name="youtube" id="youtube" 
			                value={this.state.youtube} onChange={this.handleChangeYoutube.bind(this)} />
			            </div>
			        </div>
			        <div className="col-md-6 col-sm-6">
			            <div className="form-group">
			                <label htmlFor="twitter">Twitter URL</label>
			                <input type="text" className="form-control" name="twitter" id="twitter" 
			                value={this.state.twitter} onChange={this.handleChangeTwitter.bind(this)}/>
			            </div>
			            <div className="form-group">
			                <label htmlFor="pinterest">Pinterest URL</label>
			                <input type="text" className="form-control" name="pinterest" id="pinterest"  
			                value={this.state.pinterest} onChange={this.handleChangePinterest.bind(this)}  />
			            </div>
			        </div>
			    </div>
			</section>
		)
	}
}
