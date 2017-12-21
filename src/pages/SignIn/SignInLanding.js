import React from 'react';
 
export class SignIn extends React.Component {
	render(){
		return(
			<section>
                <form className="form inputs-underline">
                    <div className="form-group">
                        <label htmlFor="email">{this.props.email}</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">{this.props.password}</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" />
                    </div>
                    <div className="form-group center">
                        <button type="submit" className="btn btn-primary width-100">{this.props.buttonText}</button>
                    </div>

              	</form>
                <hr />
                <a href="#" data-modal-external-file="modal_reset_password.php" data-target="modal-reset-password">I have forgot my password</a>
            </section>
		)
	}
}