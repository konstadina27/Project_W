import React from 'react';

export class Reviews extends React.Component {
	render(){
		return(
		<div>
            <section>
                <h2>Reviews</h2>
                <div className="review">
                    <div className="image">
                        <div className="bg-transfer"><img src={this.props.img} alt="" /></div>
                    </div>
                    <div className="description">
                        <figure>
                            <div className="rating-passive" data-rating={this.props.rating}>
                                <span className="stars"></span>
                                <span className="reviews">{this.props.review}</span>
                            </div>
                            <span className="date">{this.props.date}</span>
                        </figure>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </section>      
		</div>
		)
	}
}