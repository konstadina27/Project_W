import React from 'react';
 
export class ResetPasswordContent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email:""
		}	
	}
	handleValueChange(event) {
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
			<div id="page-content">
		       <div className="container">
			        <ol className="breadcrumb">
			            <li><a href="#">Home</a></li>
			            <li><a href="#">Pages</a></li>
			            <li className="active">Contact</li>
			        </ol>
				    <div className="row reset">
	             		<div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
				            <section className="page-title">
				                <h1>Reset Password</h1>
				            </section>
				            <section>
					            <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
					                <div className="form-group">
			                            <label htmlFor="email">Email</label>
			                            <input type="email" className="form-control" name="email" id="email" placeholder="Your email" 
			                            onChange={this.handleValueChange.bind(this)}/>
			                        </div> 
			                        <div className="form-group center">
			                            <button type="submit" className="btn btn-primary width-100">Send me new password</button>
			                        </div>
					             </form>
					        </section>
					    </div>
					</div>
			    </div>
			</div>
		);
	}
}