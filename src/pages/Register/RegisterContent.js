import React from 'react';
import { 
	BrowserRouter as Router,
	NavLink 
} from 'react-router-dom';

export class RegisterContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			first_name:"",
			last_name:"",
			email:"",
			password:"",
			confirm_password:"",
		}	
	}
	handleChangeFirstName(event) {
		this.setState({
			first_name: event.target.value
		})
	}
	handleChangeLastName(event) {
		this.setState({
			last_name: event.target.value
		})
	}
	handleChangeEmail(event) {
		this.setState({
			email: event.target.value
		})
	}
	handleChangePassword(event) {
		this.setState({
			password: event.target.value
		})
	}
	handleChangeConfPassword(event) {
		this.setState({
			confirm_password: event.target.value
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
				                                <input type="text" className="form-control" name="first_name"
				                                 id="first_name" placeholder="First name" value={this.state.first_name} 
				                                 onChange={this.handleChangeFirstName.bind(this)}/>
				                            </div>
				                        </div>
										<div className="col-md-6 col-sm-6">
				                            <div className="form-group">
				                                <label htmlFor="last_name">Last Name</label>
				                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" 
				                                value={this.state.last_name} 
				                                onChange={this.handleChangeLastName.bind(this)}/>
				                            </div>   
				                        </div>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="email">Email</label>
				                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"
				                        value={this.state.email} 
				                        onChange={this.handleChangeEmail.bind(this)}/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="password">Password</label>
				                        <input type="password" className="form-control" name="password" id="password" placeholder="Password"
				                        value={this.state.password} 
				                        onChange={this.handleChangePassword.bind(this)}/>
				                    </div>
				                    <div className="form-group">
				                        <label htmlFor="confirm_password">Confirm Password</label>
				                        <input type="password" className="form-control" name="confirm_password"
				                         id="confirm_password" placeholder="Confirm Password" 
				                         value={this.state.confirm_password} 
				                         onChange={this.handleChangeConfPassword.bind(this)}/>
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