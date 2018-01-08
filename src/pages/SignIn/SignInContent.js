import React from 'react';
 
export class SignInContent extends React.Component {
	render(){
		return(
			    <div id="page-content">
			        <div className="container">
			            <ol className="breadcrumb">
			                <li><a href="#">Home</a></li>
			                <li><a href="#">Pages</a></li>
			                <li className="active">Contact</li>
			            </ol>
			            <div className="row sign">
	              			<div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
					            <section className="page-title">
					                <h1>Sign In</h1>
					            </section>
					            <section>
					                <form className="form inputs-underline">
					                    <div className="form-group">
					                        <label htmlFor="email">Email</label>
					                        <input type="email" className="form-control" name="email" id="email" placeholder="Your email" />
					                    </div>
					                    <div className="form-group">
					                        <label htmlFor="password">Password</label>
					                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" />
					                    </div>
					                    <div className="form-group center">
					                        <button type="submit" className="btn btn-primary width-100">Sign In</button>
					                    </div>

					              	</form>
					                <hr />
					                <a href="#" data-modal-external-file="modal_reset_password.php" data-target="modal-reset-password">I have forgot my password</a>
					            </section>
					        </div>
					    </div>
			        </div>
			    </div>
		);
	}
}