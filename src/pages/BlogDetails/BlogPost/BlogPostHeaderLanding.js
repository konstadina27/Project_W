import React from 'react';
import {BlogSpot} from './BlogPostLanding';

export class BlogSpotHeader extends React.Component {
	render(){
		return(
			<article className="blog-post">
			    <a href="blog-detail.html"><img src={this.props.img} alt="" /></a>
			    <header><a href="blog-detail.html"><h2>{this.props.title}</h2></a></header>
			    <figure className="meta">
			        <a href="#" className="link-icon"><i className="fa fa-user"></i>{this.props.user}</a>
			        <a href="#" className="link-icon"><i className="fa fa-calendar"></i>{this.props.date}</a>
			        <div className="tags">
			            <a href="#" className="tag article">Architecture</a>
			            <a href="#" className="tag article">Design</a>
			            <a href="#" className="tag article">Trend</a>
			        </div>
			    </figure>
			    <p> {this.props.text}</p>
			    <BlogSpot />
			</article>
		)
	}
}

	            