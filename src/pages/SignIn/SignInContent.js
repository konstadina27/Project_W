import React from 'react';
import {SignIn} from './SignInLanding';
 
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
					            <SignIn email="Email" password="Password" buttonText="Sign In"/>
					        </div>
					    </div>
			        </div>
			    </div>
		);
	}
}