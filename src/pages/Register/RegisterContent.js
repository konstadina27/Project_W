import React from 'react';
import { 
	BrowserRouter as Router,
	NavLink 
} from 'react-router-dom';

export class RegisterContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			firstName:"",
			lastName:"",
			email:"",
			password:"",
			confirmPassword:"",
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
      }
	render(){
		return(
		<Router>
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
				                <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
				                    <div className="row">
				                        <div className="col-md-6 col-sm-6">
				                            <div className="form-group">
				                                <label htmlFor="first_name">First Name</label>
				                                <input type="text" className="form-control" name="firstName"
				                                 id="first_name" placeholder="First name"                           
				                                 onChange={this.handleValueChange.bind(this)}/>
				                            </div>
				                        </div>
										<div className="col-md-6 col-sm-6">
				                            <div className="form-group">
				                                <label htmlFor="last_name">Last Name</label>
				                                <input type="text" className="form-control" name="lastName" id="last_name" placeholder="Last name" 
				                                onChange={this.handleValueChange.bind(this)}/>
				                            </div>   
				                        </div>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="email">Email</label>
				                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"
				                        onChange={this.handleValueChange.bind(this)}/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="password">Password</label>
				                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"
				                        onChange={this.handleValueChange.bind(this)}/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="confirm_password">Confirm Password</label>
				                        <input type="password" className="form-control" name="confirmPassword"
				                         id="confirm_password" placeholder="Confirm Password"
				                         onChange={this.handleValueChange.bind(this)}/>
				                    </div>
				                    <div className="form-group center">
				                        <button type="submit" className="btn btn-primary width-100">Register Now</button>
				                    </div>
				                </form>
				                <hr />
								<p className="center">By clicking on “Register Now” button you are accepting the <NavLink to="/terms" target="_self">Terms & Conditions</NavLink></p>
				            </section>
				        </div>
				    </div>
		        </div>
		    </div>
		</Router>
		);
	}
}