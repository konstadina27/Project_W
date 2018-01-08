import React from 'react';
 
export class AboutContent extends React.Component {
	render(){
		return(
			<section>
			    <h3>About</h3>
			        <div className="row">
			            <div className="col-md-9 col-sm-9">
			                <div className="form-group">
			                    <label htmlFor="title">Listing Title</label>
			                    <input type="text" className="form-control" name="title" id="title" placeholder="Title" />
			                </div>
			            </div>
			            <div className="col-md-3 col-sm-3">
			                <div className="form-group">
			                    <label htmlFor="category">Category</label>
			                    <select className="form-control selectpicker" name="category" id="category">
			                        <option value="1">Restaurant</option>
			                        <option value="">Category</option>
			                        <option value="2">Event</option>
			                        <option value="3">Adrenaline</option>
			                        <option value="4">Sport</option>
			                        <option value="5">Wellness</option>
			                    </select>
			                </div>
			            </div>
			        </div>
			        <div className="form-group">
			            <label htmlFor="description">Description</label>
			            <textarea className="form-control" id="description" rows="4" name="description">Nunc vitae consectetur orci, eu consequat magna. Fusce tortor ex, feugiat sed ipsum accumsan, ornare suscipit nibh. Mauris scelerisque euismod elit nec auctor. Nulla eu turpis pharetra, finibus turpis consectetur, porttitor sapien. Curabitur ornare euismod congue. Nunc quis placerat risus.</textarea>
			        </div>
			        <div className="form-group">
			            <label htmlFor="tags">Tags</label>
			            <input type="text" className="form-control" name="tags" id="tags"  />
			        </div>
			</section>
		)
	}
}