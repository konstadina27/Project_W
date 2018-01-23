import React from 'react';

export class FormContent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            subject:"",
            message:""
        }
    }
    handleNameChange(event){
        this.setState({
            name: event.target.value
        })
    }
    handleEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }
    handleSubjectChange(event){
        this.setState({
            subject: event.target.value
        })
    }
    handleMessageChange(event){
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
	render(){
		return(
            <div className="col-md-9 col-sm-9">
                <h3>Form</h3>
                <form className="form form-email inputs-underline" id="form-hero" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" name="name" id="name" 
                                value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" name="email" id="email" 
                                value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" 
                                value={this.state.subject} onChange={this.handleSubjectChange.bind(this)}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" id="message" rows="4" name="message"
                        value={this.state.message} onChange={this.handleMessageChange.bind(this)}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary icon shadow">Send Message<i className="fa fa-caret-right"></i></button>
                    </div>
                </form>
            </div>
		)
	}
}