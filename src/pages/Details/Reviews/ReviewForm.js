import React from 'react';

export class ReviewsForm extends React.Component {
	render(){
		return(
		<div>
			<section id="write-a-review">
			    <h2>Write a Review</h2>
			    <form className="clearfix form inputs-underline">
			        <div className="box">
			            <div className="comment">
			                <div className="row">
			                    <div className="col-md-8">
			                        <div className="comment-title">
			                            <h4>Review your experience</h4>
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="name">Title of your review<em>*</em></label>
			                                <input type="text" className="form-control" id="name" name="name" placeholder="Beautiful place!" required="" />
			                        </div>
			                        <div className="form-group">
			                            <label htmlFor="message">Your Message<em>*</em></label>
			                            <textarea className="form-control" id="message" rows="8" name="message" required="" placeholder="Describe your experience"></textarea>
			                        </div>
			                    </div>
			                    <div className="col-md-4">
			                        <div className="comment-title">
			                            <h4>Rating</h4>
			                        </div>
			                        <dl className="visitor-rating">
			                            <dt>Comfort</dt>
			                            <dd className="star-rating active" data-name="comfort"></dd>
			                            <dt>Location</dt>
			                            <dd className="star-rating active" data-name="location"></dd>
			                            <dt>Facilities</dt>
			                            <dd className="star-rating active" data-name="facilities"></dd>
			                            <dt>Staff</dt>
			                            <dd className="star-rating active" data-name="staff"></dd>
			                            <dt>Value for money</dt>
			                            <dd className="star-rating active" data-name="value"></dd>
			                        </dl>
			                    </div>
			                </div>
			                <br />
			                <div className="form-group">
			                    <button type="submit" className="btn btn-primary btn-rounded">Send Review</button>
			                </div>
			            </div>
			        </div>
			    </form>
			</section>
		</div>
		)
	}
}