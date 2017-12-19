import React from 'react';
 
export class UserDetails extends React.Component {
	render(){
		return(
            <section>
                <div className="user-details box">
                    <div className="user-image">
                        <div className="image">
                            <div className="bg-transfer"><img src={this.props.img} alt="" /></div>
                            <div className="single-file-input">
                                <input type="file" id="user_image" name="user_image" />
                                <div>{this.props.pictText}<i className="fa fa-upload"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="description clearfix">
                        <h3>{this.props.planText}</h3>
                        <h2>{this.props.package}</h2>
                        <a href="#" className="btn btn-default btn-rounded btn-xs">Change</a>
                        <hr />
                        <figure>
                            <div className="pull-left"><strong>{this.props.paymentText}</strong></div>
                            <div className="pull-right">{this.props.date}</div>
                        </figure>
                    </div>
                </div>
            </section>
		);
	}
}
