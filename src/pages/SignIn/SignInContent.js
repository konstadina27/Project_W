import React from 'react';
import { 
	BrowserRouter as Router,
	NavLink 
} from 'react-router-dom';
 
export class SignInContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:"",
			password:"",
		}	
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
			                <li className="active">Contact</li>
			            </ol>
			            <div className="row sign">
	              			<div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
					            <section className="page-title">
					                <h1>Sign In</h1>
					            </section>
					            <section>
					                <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
					                    <div className="form-group">
					                        <label htmlFor="email">Email</label>
					                        <input type="email" className="form-control" name="email" id="email" placeholder="Your email"  value={this.state.email} 
				                        onChange={this.handleChangeEmail.bind(this)}/>
					                    </div>
					                    <div className="form-group">
					                        <label htmlFor="password">Password</label>
					                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" 				                        
					                        value={this.state.password} 
				                        	onChange={this.handleChangePassword.bind(this)}/>
					                    </div>
					                    <div className="form-group center">
					                        <button type="submit" className="btn btn-primary width-100">Sign In</button>
					                    </div>

					              	</form>
					                <hr />
					                <NavLink to="/reset-password" target="_self">I have forgot my password</NavLink>
					            </section>
					        </div>
					    </div>
			        </div>
			    </div>
			</Router>
		);
	}
}