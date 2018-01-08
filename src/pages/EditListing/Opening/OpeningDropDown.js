import React from 'react';
 
export class OpeningContent extends React.Component {
	render(){
		return(
			<section>
			    <h3>Opening Hours<span className="note">(optional)</span></h3>
			    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			        <div className="panel panel-default">
			            <div className="panel-heading" role="tab" id="accordion-heading-1">
			                <h4 className="panel-title">
			                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#accordion-collapse-1" aria-expanded="false" aria-controls="accordion-collapse-1">
			                        <i className="fa fa-clock-o"></i>Add opening hours
			                    </a>
			                </h4>
			            </div>
			            <div id="accordion-collapse-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="accordion-heading-1">
			                <div className="panel-body">
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Monday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="20:00" />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Tuesday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="20:00" />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">                            
			                            <strong>Wednesday</strong>                            
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="20:00" />
			                            </div>
			                        </div>
			                    </div>                            
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Thursday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="20:00" />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Friday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="24:00" />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Saturday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="open_hours[]" value="10:00" />
			                                </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="close_hours[]" value="22:00" />
			                            </div>
			                        </div>
			                    </div>
			                    <div className="row">
			                        <div className="col-md-4 col-sm-4 horizontal-input-title">
			                            <strong>Sunday</strong>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                <input type="text" className="form-control" name="open_hours[]" value="08:00" />
			                            </div>
			                        </div>
			                        <div className="col-md-4 col-sm-4">
			                            <div className="form-group">
			                                 <input type="text" className="form-control" name="close_hours[]" value="20:00" />
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