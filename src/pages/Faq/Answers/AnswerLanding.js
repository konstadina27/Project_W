import React from 'react';
 
export class Answer extends React.Component {
	render(){
		return(
            <div className="answer">
                <div className="box">
                    <h3>{this.props.title}</h3>
                    <p>{this.props.text}</p>
                </div>
                <figure>Was this answer helpful? <a href="#">Yes<i className="fa fa-thumbs-up"></i></a> <a href="#">No<i className="fa fa-thumbs-down"></i></a></figure>
            </div>
		);
	}
}