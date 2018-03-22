import React from 'react';
 
export class FormContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userImage:"",
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            about:"",      
            facebook:"",
            twitter:"",
            pinterest:"",
            youtube:"",
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
            <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}> 
                <section>
                    <div className="user-details box">
                        <div className="user-image">
                            <div className="image">
                                <div className="bg-transfer"><img src="assets/img/person-01.jpg" alt="" /></div>
                                <div className="single-file-input">
                                    <input type="file" id="user_image" name="userImage" onChange={this.handleValueChange.bind(this)}/>
                                    <div>Upload a picture<i className="fa fa-upload"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="description clearfix">
                            <h3>Your current plan</h3>
                            <h2>Gold Package</h2>
                            <a href="#" className="btn btn-default btn-rounded btn-xs">Change</a>
                            <hr />
                            <figure>
                                <div className="pull-left"><strong>Next payment:</strong></div>
                                <div className="pull-right">24/12/2015</div>
                            </figure>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>About You</h3>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Jane" 
                                 onChange={this.handleValueChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Green" 
                                 onChange={this.handleValueChange.bind(this)}/>
                       		</div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="jane@example.com" 
                                 onChange={this.handleValueChange.bind(this)}/>
                        	</div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" className="form-control" name="phone" id="phone" placeholder="+1 260-478-7987"
                                  onChange={this.handleValueChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">About You</label>
                        <textarea className="form-control" id="message" rows="2" name="about" placeholder="Something about me" 
                        onChange={this.handleValueChange.bind(this)}> 
                        </textarea>
                    </div>
                </section>
                <section>
                    <h3>Your Social Networks</h3>
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="facebook">Facebook</label>
                                <input type="text" className="form-control" name="facebook" id="facebook" placeholder="Facebook" 
                                onChange={this.handleValueChange.bind(this)}/>
                             </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="twitter">Twitter</label>
                                <input type="text" className="form-control" name="twitter" id="twitter" placeholder="Twitter"
                                onChange={this.handleValueChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="pinterest">Pinterest</label>
                                <input type="text" className="form-control" name="pinterest" id="pinterest" placeholder="Pinterest"
                                onChange={this.handleValueChange.bind(this)} />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                            <div className="form-group">
                                <label htmlFor="youtube">Youtube</label>
                                <input type="text" className="form-control" name="youtube" id="youtube" placeholder="Youtube" 
                                onChange={this.handleValueChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="center">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-rounded">Save Changes</button>
                    </div>
                </section>
            </form>
		);
	}
}
