import React from 'react';
 
export class AboutContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title:"",
			category:"Category",
			description:"",
			tags:""
		}
	}
	handleTitle(event){
		this.setState({
			title: event.target.value
		})
	}
	handleCategory(event){
		this.setState({
			category: event.target.value
		})
	}
	handleDesc(event){
		this.setState({
			description: event.target.value
		})
	}
	handleTags(event){
		this.setState({
			description: event.target.value
		})
	}
	render(){
		return(
			<section>
			    <h3>About</h3>
			        <div className="row">
			            <div className="col-md-9 col-sm-9">
			                <div className="form-group">
			                    <label htmlFor="title">Listing Title</label>
			                    <input type="text" className="form-control" name="title" id="title" placeholder="Title"
			                    value={this.state.title} onChange={this.handleTitle.bind(this)} />
			                </div>
			            </div>
			            <div className="col-md-3 col-sm-3">
			                <div className="form-group">
			                    <label htmlFor="category">Category</label>
			                    <select className="form-control selectpicker" name="category" id="category" 
			                    value={this.state.category} onChange={this.handleCategory.bind(this)}>
			                    	<option value="category">Category</option>
			                        <option value="Restaurant">Restaurant</option>
			                        <option value="Event">Event</option>
			                        <option value="Adrenaline">Adrenaline</option>
			                        <option value="Sport">Sport</option>
			                        <option value="Wellness">Wellness</option>
			                    </select>
			                </div>
			            </div>
			        </div>
			        <div className="form-group">
			            <label htmlFor="description">Description</label>
			            <textarea className="form-control" id="description" rows="4" name="description" 
			            value={this.state.description} onChange={this.handleDesc.bind(this)}></textarea>
			        </div>
			        <div className="form-group">
			            <label htmlFor="tags">Tags</label>
			            <input type="text" className="form-control" name="tags" id="tags" 
			            value={this.state.tags} onChange={this.handleTags.bind(this)} />
			        </div>
			</section>
		)
	}
}