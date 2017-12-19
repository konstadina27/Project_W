import React from 'react';
 
export class ChangePass extends React.Component {
	render(){
		return(
            <div>
                <h3 className="center">{this.props.title}</h3>
                <form className="form inputs-underline">
                    <div className="form-group">
                        <label htmlFor="current_password">Current Password</label>
                        <input type="password" className="form-control" name="current_password" id="current_password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new_password">New Password</label>
                        <input type="password" className="form-control" name="new_password" id="new_password" placeholder="New Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm_new_password">Confirm New Password</label>
                        <input type="password" className="form-control" name="confirm_new_password" id="confirm_new_password" placeholder="Confirm New Password" />
                    </div>
                    <div className="form-group center">
                        <button type="submit" className="btn btn-primary btn-framed btn-rounded btn-light-frame">Change Password</button>
                    </div>
                </form>
            </div>
		);
	}
}