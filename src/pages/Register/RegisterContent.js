import React from 'react';
import {Register} from './RegisterLanding';
 
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
		            <div class="row register">
              			<div class="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
				            <section className="page-title">
				                <h1>Register</h1>
				            </section>
				            <Register firstName="First Name" lastName="Last Name" email="Email" password="Password" confirm="Confirm Password" buttonText="Register Now" termsText="By clicking on “Register Now” button you are accepting the " cond="Terms & Conditions"/>
				        </div>
				    </div>
		        </div>
		    </div>
		);
	}
}