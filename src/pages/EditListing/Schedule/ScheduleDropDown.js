import React from 'react';
 
export class ScheduleContent extends React.Component {
	render(){
		return(
<section>
    <h3>Schedule<span className="note">(optional)</span></h3>
    <div className="panel-group" id="accordion-3" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="accordion-heading-3">
                <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#accordion-collapse-3" aria-expanded="false" aria-controls="accordion-collapse-3">
                        <i className="fa fa-calendar"></i>Add schedule plan
                    </a>
                </h4>
            </div>
            <div id="accordion-collapse-3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-3">
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
                                    <input type="text" className="form-control" name="schedule_date[]" placeholder="Date" />
                                </div>
                            </div>
                            <div className="col-md-2 col-sm-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="schedule_time[]" placeholder="Time" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="schedule_place[]" placeholder="Place" />
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-3">
                                <div className="form-group">
                                    <input type="text" className="form-control" name="schedule_address[]" placeholder="Address" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="center"><a href="#duplicate-schedule" className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another schedule item</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
		)
	}
}