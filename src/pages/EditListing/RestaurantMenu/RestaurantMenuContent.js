import React from 'react';
 
export class RestaurantMenuContent extends React.Component {
	render(){
		return(
			<section>
			    <h3>Restaurant Menu<span className="note">(optional)</span></h3>
			    <div className="panel-group" id="accordion-2" role="tablist" aria-multiselectable="true">
			        <div className="panel panel-default">
			            <div className="panel-heading" role="tab" id="accordion-heading-2">
			                <h4 className="panel-title">
			                    <a role="button" data-toggle="collapse" data-parent="#accordion-2" href="#accordion-collapse-2" aria-expanded="false" aria-controls="accordion-collapse-2">
			                        <i className="fa fa-cutlery"></i>Add restaurant menu
			                    </a>
			                </h4>
			            </div>
			            <div id="accordion-collapse-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-2">
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
			                                    <input type="text" className="form-control" name="menu_title[]" placeholder="Title" />
			                                </div>
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menu_description[]" placeholder="Description" />
			                                </div>
			                            </div>
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <select className="form-control selectpicker" name="menu_type[]">
			                                        <option value="">Select meal type</option>
			                                        <option value="1">Starter</option>
			                                        <option value="2">Soup</option>
			                                        <option value="3">Main Course</option>
			                                        <option value="4">Desert</option>
			                                    </select>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="row">
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menu_title[]" placeholder="Title" />
			                                </div>
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menu_description" placeholder="Description" />
			                                </div>
			                            </div>
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <select className="form-control selectpicker" name="menu_type[]">
			                                        <option value="">Select meal type</option>
			                                        <option value="1">Starter</option>
			                                        <option value="2">Soup</option>
			                                        <option value="3">Main Course</option>
			                                        <option value="4">Desert</option>
			                                    </select>
			                                </div>
			                            </div>
			                        </div>
			                        <div className="row" id="duplicate-meal">
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menu_title[]" placeholder="Title" />
			                                </div>
			                            </div>
			                            <div className="col-md-6 col-sm-6">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="menu_description" placeholder="Description" />
			                                </div>
			                            </div>
			                            <div className="col-md-3 col-sm-3">
			                                <div className="form-group">
			                                    <select className="form-control selectpicker" name="menu_type[]">
			                                        <option value="">Select meal type</option>
			                                        <option value="1">Starter</option>
			                                        <option value="2">Soup</option>
			                                        <option value="3">Main Course</option>
			                                        <option value="4">Desert</option>
			                                    </select>
			                                </div>
			                            </div>
			                        </div>
			                    </div>
			                    <div className="center"><a href="#duplicate-meal" className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another meal</a></div>
			                </div>
			            </div>
			        </div>
			    </div>
			</section>
		)
	}
}
