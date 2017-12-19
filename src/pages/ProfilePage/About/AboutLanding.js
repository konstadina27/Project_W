import React from 'react';
 
export class About extends React.Component {
	render(){
		return(
            <section>
                <h3>{this.props.title}</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="first_name">{this.props.first}</label>
                            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="Jane" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="last_name">{this.props.last}</label>
                            <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Green" />
                   		</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="email">{this.props.email}</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="jane@example.com" />
                    	</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="phone">{this.props.phone}</label>
                            <input type="text" className="form-control" name="phone" id="phone" placeholder="+1 260-478-7987" />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">{this.props.about}</label>
                    <textarea className="form-control" id="message" rows="2" name="message" placeholder="Something about me"></textarea>
                </div>
            </section>
		);
	}
}
