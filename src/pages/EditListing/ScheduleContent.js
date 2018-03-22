import React from 'react';

export class ScheduleContent extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section>
			    <h3>Schedule<span className="note">(optional)</span></h3>
			    <div className="panel-group" id="accordion-3" role="tablist" aria-multiselectable="true">
			        <div className="panel panel-default">
			            <div className="panel-heading" role="tab" id="accordion-heading-3">
			                <h4 className="panel-title">
			                    <a role="button" data-toggle="collapse" href={`#accordion-collapse${this.props.schedId}`} aria-expanded="false" aria-controls={`accordion-collapse${this.props.schedId}`}>
			                        <i className="fa fa-calendar"></i>Add schedule plan
			                    </a>
			                </h4>
			            </div>
			           	<div id={`accordion-collapse${this.props.schedId}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-3">
			                <div className="panel-body">
			                    <div className="wrapper">
			                        <div className="row">
			                            <div className="col-md-2 col-sm-3">
			                                <strong>Date</strong>
			                            </div>
			                            <div className="col-md-2 col-sm-3">
			                                <strong>Time</strong>
			                            </div>
			                            <div className="col-md-4 col-sm-3">
			                                <strong>Place</strong>
			                            </div>
			                            <div className="col-md-4 col-sm-3">
			                                <strong>Address</strong>
			                            </div>
			                        </div>
			                        <div className="row" id="duplicate-schedule">
			                            <div className="col-md-2 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="scheduleDate" placeholder="Date"
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-2 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="time" placeholder="Time"
			                                     onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-4 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="place" placeholder="Place"
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-4 col-sm-3">
			                                <div className="form-group">
			                                    <input type="text" className="form-control" name="scheduleAddress" placeholder="Address"
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