import React from 'react';

export class ReviewForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			name:"",
			position:"",
			answer:""
		}
	}
	handleChangeName(event){
		this.setState({
			name: event.target.value
		})
	}
	handleChangePosition(event){
		this.setState({
			position: event.target.value
		})
	}
	handleChangeAnswer(event){
		this.setState({
			answer: event.target.value
		})
	}
	handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
	render(){
		return(
			<div>
	            <form className="form labels-uppercase clearfix" id={this.props.formId} onSubmit={this.handleSubmit.bind(this)}>
	                <div className="row">
	                    <div className="col-md-6">
	                        <div className="form-group">
	                            <label htmlFor="form_reply-name">Your Name<em>*</em></label>
	                            <input type="text" className="form-control" id="form_reply-name" name="name" placeholder="Name" required="" 
	                            value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
	                        </div>
	                    </div>
	                    <div className="col-md-6">
	                        <div className="form-group">
	                            <label htmlFor="form_reply-email">Your Position (optional)</label>
	                            <input type="text" className="form-control" id="form_reply-email" name="position" placeholder="e.g. Owner"
	                            value={this.state.position} onChange={this.handleChangePosition.bind(this)}/>
	                        </div>
	                    </div>
	                </div>
	                <div className="form-group">
	                    <label htmlFor="form_reply-message">Your Answer<em>*</em></label>
	                    <textarea className="form-control" id="form_reply-message" rows="8" name="answer" required="" placeholder="Message" 
	                    value={this.state.answer} onChange={this.handleChangeAnswer.bind(this)}></textarea>
	                </div>
	                <div className="form-group pull-right">
	                    <button type="submit" className="btn btn-primary btn-rounded">Send Message</button>
	                </div>
	            </form>
            </div>
		)
	}
}