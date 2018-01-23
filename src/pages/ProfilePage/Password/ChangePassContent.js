import React from 'react';
 
export class ChangePassContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            current_password:"",
            new_password:"",
            confirm_new_password:""
        }
    }
    handleCurrPass(event) {
        this.setState({
            current_password: event.target.value
        })
    }
    handleNewPass(event) {
        this.setState({
            new_password: event.target.value
        })
    }
    handleConNewPass(event) {
        this.setState({
            confirm_new_password: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
        this.setState({
            current_password:"",
            new_password:"",
            confirm_new_password:""
        })
    } 
	render(){
		return(
            <div>
                <section>
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
                            <h3 className="center">Change Your Password</h3>
                            <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="current_password">Current Password</label>
                                    <input type="password" className="form-control" name="current_password" id="current_password" 
                                    value={this.state.current_password} onChange={this.handleCurrPass.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="new_password">New Password</label>
                                    <input type="password" className="form-control" name="new_password" id="new_password" placeholder="New Password"
                                    value={this.state.new_password} onChange={this.handleNewPass.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm_new_password">Confirm New Password</label>
                                    <input type="password" className="form-control" name="confirm_new_password" id="confirm_new_password" placeholder="Confirm New Password" 
                                    value={this.state.confirm_new_password} onChange={this.handleConNewPass.bind(this)}/>
                                </div>
                                <div className="form-group center">
                                    <button type="submit" className="btn btn-primary btn-framed btn-rounded btn-light-frame">Change Password</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
		);
	}
}