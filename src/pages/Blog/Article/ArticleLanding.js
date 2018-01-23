import React from 'react';

export class Article extends React.Component {
    render(){

        return(
            <article className="blog-post">
                <header className={this.props.titleHidden}><a href="blog-detail.html"><h2>{this.props.title2}</h2></a></header>
                <iframe className={this.props.hidden} width="100%" height="166" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/71654970&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_artwork=true&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                <a href="blog-detail.html"><img src={this.props.img} alt="" /></a>
                <header><a href="blog-detail.html"><h2>{this.props.title}</h2></a></header>
                <figure className="meta">
                    <a href="#" className="link icon"><i className="fa fa-user"></i>{this.props.user}</a>
                    <a href="#" className="link icon"><i className="fa fa-calendar"></i>{this.props.date}</a>
                    <div className="tags">
                       { 
                        this.props.tags.map(data =>{
                        return <a href="#" className="tag article" key={data.id}>{data.name}</a>
                        })
                        }
                    </div>
                </figure>
                <p>{this.props.text}</p>
                <p className={this.props.textHidden}>{this.props.text2}</p>
                <a href="blog-detail.html" className="link-arrow">Read More</a>
            </article>
        )
    }
}