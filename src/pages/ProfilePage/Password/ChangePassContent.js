import React from 'react';
 
export class ChangePassContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPassword:"",
            newPassword:"",
            confirmNewPassword:""
        }
    }
    handleValueChange(event){
        this.setState({
            [event.target.name]: event.target.value
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
                                    <input type="password" className="form-control" name="currentPassword" id="current_password" 
                                    onChange={this.handleValueChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="new_password">New Password</label>
                                    <input type="password" className="form-control" name="newPassword" id="new_password" placeholder="New Password"
                                    onChange={this.handleValueChange.bind(this)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm_new_password">Confirm New Password</label>
                                    <input type="password" className="form-control" name="confirmNewPassword" id="confirm_new_password" placeholder="Confirm New Password" 
                                    onChange={this.handleValueChange.bind(this)}/>
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