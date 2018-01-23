import React from 'react';

export class Listing extends React.Component {
	render(){
		return(
				<tbody>
                        <tr className="my-item">
                            <td>
                                <div className="image-wrapper">
                                    <div className={this.props.Topclass} data-toggle="tooltip" data-placement="right" title="Top Listing"><i className="fa fa-thumbs-up"></i></div>
                                    <figure className={this.props.ribbon}>Top</figure>
                                    <a href="edit-listing.html" className="image">
                                        <div className="bg-transfer">
                                            <img src={this.props.img} />
                                        </div>
                                    </a>
                                </div>
                                <div className="info">
                                    <a href="detail.html"><h2>{this.props.title}</h2></a>
                                    <figure className="location">{this.props.location}</figure>
                                    <figure className="label label-info">{this.props.type}</figure>
                                    <div className={this.props.addClass}>
                                        <span><i className="fa fa-bed"></i>12</span>
                                        <span className="price-info">From <span className="price">$32</span><span className="appendix">/night</span></span>
                                    </div>
                                    <div className={this.props.addClass2}>
                                        <span className="price-info">{this.props.priceT}</span>
                                    </div>
                                </div>
                            </td>
                            <td><div className={this.props.featured}><i className={this.props.featicon}></i><aside></aside></div></td>
                            <td className="views">{this.props.view}</td>
                            <td className="reviews">{this.props.review}</td>
                            <td className="rating">
                                <div className="rating-passive" data-rating={this.props.rating}>
                                    <span className="stars"></span>
                                    <span className="reviews">{this.props.ratingReview}</span>
                                </div>
                            </td>
                            <td className="last-edited">{this.props.edited}
                                <span className="last-edit">Last edited: Today 12:35</span>
                                <div className="edit-options">
                                    <a href="edit-listing.html" className="link icon"><i className="fa fa-edit"></i>Edit</a>
                                    <a href="reviews.html" className="link icon"><i className="fa fa-comment"></i>Reviews</a>
                                    <a href="#" className="link icon delete"><i className="fa fa-trash"></i>Delete</a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
		)
	}
}

	            