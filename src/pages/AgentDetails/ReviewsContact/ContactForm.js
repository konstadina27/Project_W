import React from 'react';

export class ContactForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title:"",
			name:"",
			email:"",
			message:"",
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
		<div>
			<section id="write-a-review">
				<div className="col-md-5">
			    	<h2>Write a Message</h2>
				    <form className="clearfix form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
				        <div className="box">
				            <div className="comment">
				                <div className="row">
				                    <div className="col-md-12">
				                        <div className="comment-title">
				                            <h4>Send your message</h4>
				                        </div>
				                        <div className="form-group">
				                            <label htmlFor="name">Message Title<em>*</em></label>
				                            <input type="text" className="form-control" id="name" name="title" onChange={this.handleValueChange.bind(this)}/>
				                        </div>
				                        <div className="form-group">
				                            <label htmlFor="name">Your name<em>*</em></label>
				                            <input type="text" className="form-control" id="name" name="name" onChange={this.handleValueChange.bind(this)}/>
				                        </div>
				                    	<div className="form-group">
				                            <label htmlFor="name">Your email<em>*</em></label>
				                            <input type="text" className="form-control" id="name" name="email" onChange={this.handleValueChange.bind(this)}/>
				                        </div>
				                        <div className="form-group">
				                            <label htmlFor="message">Your Message<em>*</em></label>
				                            <textarea className="form-control" id="message" rows="4" name="message" 
				                            placeholder="Write your message" onChange={this.handleValueChange.bind(this)}></textarea>
				                        </div>
				                    </div>
				                </div>
				                <br />
				                <div className="form-group">
				                    <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary btn-rounded">Send Message</button>
				                </div>
				            </div>
				        </div>
				    </form>
				</div>
			</section>
		</div>
		)
	}
}