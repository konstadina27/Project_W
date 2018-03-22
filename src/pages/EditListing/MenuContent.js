import React from 'react';

export class MenuContent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section>
			    <h3>Restaraunt Menu <span className="note">(optional)</span></h3>
			    <div className="panel-group" id="accordion-2" role="tablist" aria-multiselectable="true">
			        <div className="panel panel-default">
				        <div className="panel-heading" role="tab" id="accordion-heading-2">
			                <h4 className="panel-title">
				                <a role="button" data-toggle="collapse" href={`#accordion-collapse${this.props.menuId}`} aria-expanded="false" aria-controls={`accordion-collapse${this.props.menuId}`}>
				                    <i className="fa fa-cutlery"></i>Add restaraunt menu
				                </a>
			                </h4>
			            </div>
			           <div id={`accordion-collapse${this.props.menuId}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-2">
			                <div className="panel-body">
			                    <div className="wrapper">
			                        <div className="row">
			                           	<div className="col-md-3 col-sm-3"><strong>Title </strong><span className="note">(Optional)</span></div>
			                            <div className="col-md-6 col-sm-6"><strong>Description</strong></div>
			                            <div className="col-md-3 col-sm-3"><strong>Meal Type</strong></div>
			                        </div>
			                        <div className="row">
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menuTitle" placeholder="Title" 
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menuDesc" placeholder="Description"
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <select className="form-control selectpicker" name="menuType" multiple={true} 
			                                    onChange={this.props.handleMenuType}>
			                                        <option value="" disabled>Select meal type</option>
			                                        <option value="starter">Starter</option>
			                                        <option value="soup">Soup</option>
			                                        <option value="main-course">Main Course</option>
			                                        <option value="desert">Desert</option>
			                                    </select>
			                                </div>
			                            </div>
			                            <div className="col-md-12 col-sm-12">
				                           	<div className="form-group">
										        <label htmlFor="video">Menu Video URL</label>
										        <input type="text" className="form-control" name="menuVideo" id="video" placeholder="http://"
										        onChange={this.props.handleValueChange}/>
									       	</div>
									    </div>
			                        </div>
			                    </div>
			                </div>
		                </div>
	                </div>
	            </div>
	        </section>
		)
	}
}