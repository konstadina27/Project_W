import React from 'react';
import {BlogSpotHeaderContainer} from './BlogPost/BlogPostHeaderLandingContainer';
import {AboutAuthorContainer} from './Author/AboutAuthorLandingContainer';
import {CommentsContainer} from './Comments/CommentsLandingContainer';
import {ReplyForm} from './ReplyForm/ReplyFormContent';
import {SearchFormContent} from '../../components/Search/SearchFormLanding';
import {RecentSectionContainer} from '../../components/RecentSection/RecentSectionLandingContainer';

export class BlogDetailsContent extends React.Component {
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
	            <div className="row">
                	<div className="col-md-9 col-sm-9">
			            <section className="page-title">
			                <h1>Blog</h1>
			            </section>
			            <section>
							<BlogSpotHeaderContainer/>
			            </section>
			            <AboutAuthorContainer />
			            <section id="comments">
                        	<header><h2 className="no-border">Comments</h2></header>
                        	<ul className="comments">
                        		<CommentsContainer/>
                        	</ul>
                        </section>
                    	<section id="leave-reply">
                        	<header><h2 className="no-border">Leave a Reply</h2></header>
                        	<ReplyForm />
                        </section>
			        </div>
					<div className="col-md-3 col-sm-3">
	                    <aside className="sidebar">
                        <section>
                            <h2>Search Filter</h2>
                            <SearchFormContent />
                        </section>
                        <section>
                        	<h2>Recent Items</h2>
                        	<RecentSectionContainer />
                        </section>
	                    </aside>
	                </div>
			    </div>
	       	</div>
	    </div>
		)
	}
}

	            