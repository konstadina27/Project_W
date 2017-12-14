import React from 'react';

export class BlogSection extends React.Component {
    render(){
        return(
            <div className="col-md-4 col-sm-4">
                <div className="text-element">
                    <h4><a href="blog-detail.html">{this.props.title}</a></h4>
                    <figure className="date">{this.props.date}</figure>
                    <p>{this.props.text}</p>
                    <a href="blog-detail.html"><i className="arrow_right"></i></a>
                </div>
            </div>
        );
    }
}