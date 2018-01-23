import React from 'react';

export class Comments extends React.Component {
	render(){
		return(
			<div>
                <li className="comment">
                    <figure>
                        <div className="image">
                            <img alt="" src={this.props.img} />
                        </div>
                    </figure>
                    <div className="comment-wrapper">
                        <div className="name pull-left">{this.props.name}</div>
                        <span className="date pull-right"><span className="fa fa-calendar"></span>{this.props.date}</span>
                        <p>{this.props.text}</p>
                        <a href="#" className="reply"><span className="fa fa-reply"></span>Reply</a>
                        <hr />
                    </div>
                </li>
			</div>
		)
	}
}

	            