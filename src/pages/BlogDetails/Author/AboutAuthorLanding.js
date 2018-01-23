import React from 'react';

export class AboutAuthor extends React.Component {
	render(){
		return(
			<section id="about-author">
			    <header><h3>{this.props.title}</h3></header>
			    <div className="post-author">
			        <img src={this.props.img} />
			        <div className="wrapper">
			            <header>{this.props.name}</header>
			            <p>{this.props.text}</p>
			        </div>
			    </div>
			</section>
		)
	}
}

	            