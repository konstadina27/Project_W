import React from 'react';
import {ReviewForm} from '../ReviewForm/ReviewForm';
 
export class Review extends React.Component {
	render(){
		return(
	    	<div className={this.props.reviewClass}>
                <div className={this.props.ribbonClass}><figure><i className={this.props.check}></i>{this.props.ribbonText}</figure></div>
                <div className="row">
                    <div className="col-md-2">
                        <aside className="name">{this.props.name}</aside>
                        <aside className="date">{this.props.date}</aside>
                    </div>
                    <div className="col-md-10">
                        <div className="comment">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="comment-title">
                                        <figure className="rating">{this.props.rating}</figure>
                                        <h4>{this.props.title}</h4>
                                    </div>
                                    <p>{this.props.text}</p>
                                    <div className="options">
                                        <a href={this.props.replyLink} data-toggle="collapse" aria-controls={this.props.replyId} aria-expanded="false" className="btn btn-framed btn-primary btn-rounded btn-small icon">Reply<i className="fa fa-reply font-color-default"></i></a>
                                    </div>
                                    <div className={this.props.collapse} id={this.props.replyId}>
                                        <div className="answer">
                                        	<ReviewForm />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="comment-title">
                                        <h4>Rating</h4>
                                    </div>
                                    <dl className="visitor-rating">
                                        <dt>Cleanliness</dt>
                                        <dd>{this.props.clean}</dd>
                                        <dt>Comfort</dt>
                                        <dd>{this.props.comfort}</dd>
                                        <dt>Location</dt>
                                        <dd>{this.props.location}</dd>
                                        <dt>Facilities</dt>
                                        <dd>{this.props.facilities}</dd>
                                        <dt>Staff</dt>
                                        <dd>{this.props.staff}</dd>
                                        <dt>Value for money</dt>
                                        <dd>{this.props.value}</dd>
                                    </dl>
                       	        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}