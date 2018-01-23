import React from 'react';

export class ErrorPageContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			keyword:""
		}
	}
	handleChangeKeyword(event){
		this.setState({
			keyword: event.target.value
		})
	}
	handleSubmit(event){
		console.log(this.state);
		event.preventDefault();
	}
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
				<section className="page-title center error">
                	<h1>404</h1>
                	<h2>Error</h2>
                	<p>Page cannot be found. But this search form is gonna help you!</p>
            	</section>
				<div className="row error">
	                <div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
	                    <form className="form inputs-underline" onSubmit={this.handleSubmit.bind(this)}>
	                        <div className="input-group">
	                            <input type="text" className="form-control" name="search_keyword" placeholder="Search keyword"
	                             value={this.state.keyword} onChange={this.handleChangeKeyword.bind(this)}/>
	                            <span className="input-group-btn">
	                                <button className="btn" type="submit"><i className="arrow_right"></i></button>
	                            </span>
	                        </div>
	                    </form>
               		</div>
            	</div>
	       	</div>
	    </div>
		)
	}
}