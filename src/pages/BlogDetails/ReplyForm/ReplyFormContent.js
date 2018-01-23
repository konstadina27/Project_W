import React from 'react';

export class ReplyForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
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
			<form role="form" id="form-blog-reply" method="post"  className="clearfix" onSubmit={this.handleSubmit.bind(this)}>
			    <div className="row">
			        <div className="col-md-6">
			            <div className="form-group">
			                <label htmlFor="form-blog-reply-name">Your Name<em>*</em></label>
			                <input type="text" className="form-control" id="form-blog-reply-name" name="form-blog-reply-name" required 
			                value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
			            </div>
			        </div>
			        <div className="col-md-6">
			            <div className="form-group">
			                <label htmlFor="form-blog-reply-email">Your Email<em>*</em></label>
			                <input type="email" className="form-control" id="form-blog-reply-email" name="form-blog-reply-email" required
			                value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
			            </div>
			        </div>
			    </div>
			    <div className="row">
			        <div className="col-md-12">
			            <div className="form-group">
			                <label htmlFor="form-blog-reply-message">Your Message<em>*</em></label>
			                <textarea className="form-control" id="form-blog-reply-message" rows="5" name="form-blog-reply-message" required 
			                value={this.state.message} onChange={this.handleMessageChange.bind(this)}>
			                </textarea>
			            </div>
			        </div>
			    </div>
			    <div className="form-group clearfix">
			        <button type="submit" className="btn pull-right btn-primary btn-rounded" id="form-blog-reply-submit">Leave a Reply</button>
			    </div>
			    <div id="form-rating-status"></div>
			</form>
		)
	}
}

	            