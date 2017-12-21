import React from 'react';
 
export class Register extends React.Component {
	render(){
		return(
			<section>
                <form className="form inputs-underline">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="first_name">{this.props.firstName}</label>
                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" />
                            </div>
                        </div>
						<div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label for="last_name">{this.props.lastName}</label>
                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" />
                            </div>   
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="email">{this.props.email}</label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">{this.props.password}</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label for="confirm_password">{this.props.confirm}</label>
                        <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
                    </div>
                    <div className="form-group center">
                        <button type="submit" className="btn btn-primary width-100">{this.props.buttonText}</button>
                    </div>
                </form>
                <hr />
				<p className="center">{this.props.termsText} <a href="terms-conditions.html">{this.props.cond}</a></p>
            </section>
		)
	}
}