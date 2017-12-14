import React from 'react';

export class SortSectionContent extends React.Component {
	render(){
		return(
			<section>
			    <div className="search-results-controls clearfix">
			        <div className="pull-left">
			            <a href="listing-grid-right-sidebar.html" className="circle-icon"><i className="fa fa-th"></i></a>
			            <a href="listing-row-right-sidebar.html" className="circle-icon active"><i className="fa fa-bars"></i></a>
			        </div>
			        <div className="pull-right">
			            <div className="input-group inputs-underline min-width-150px">
			                <select className="form-control selectpicker" name="sort">
			                    <option value="">Sort by</option>
			                    <option value="1">Price</option>
			                    <option value="2">Distance</option>
			                    <option value="3">Title</option>
			                </select>
			            </div>
			        </div>
			    </div>
			</section>
		);
	}
}