import React from 'react';
 
export class RegisterContent extends React.Component {
	render(){
		return(
		    <div id="page-content">
		        <div className="container">
		            <ol className="breadcrumb">
		                <li><a href="#">Home</a></li>
		                <li><a href="#">Pages</a></li>
		                <li className="active">Register</li>
		            </ol>
		            <div className="row register">
              			<div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
				            <section className="page-title">
				                <h1>Register</h1>
				            </section>
				            <section>
				                <form className="form inputs-underline">
				                    <div className="row">
				                        <div className="col-md-6 col-sm-6">
				                            <div className="form-group">
				                                <label htmlFor="first_name">First Name</label>
				                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" />
				                            </div>
				                        </div>
										<div className="col-md-6 col-sm-6">
				                            <div className="form-group">
				                                <label htmlFor="last_name">Last Name</label>
				                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" />
				                            </div>   
				                        </div>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="email">Email</label>
				                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="password">Password</label>
				                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="confirm_password">Confirm Password</label>
				                        <input type="password" className="form-control" name="confirm_password" id="confirm_password" placeholder="Confirm Password"/>
				                    </div>
				                    <div className="form-group center">
				                        <button type="submit" className="btn btn-primary width-100">Register Now</button>
				                    </div>
				                </form>
				                <hr />
								<p className="center">By clicking on “Register Now” button you are accepting the <a href="terms-conditions.html">Terms & Conditions</a></p>
				            </section>
				        </div>
				    </div>
		        </div>
		    </div>
		);
	}
}