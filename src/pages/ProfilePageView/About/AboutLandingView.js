import React from 'react';
 
export class About extends React.Component {
	render(){
		return(
            <section>
                <h3>{this.props.title}</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                            <label htmlFor="first_name">{this.props.first}</label>
                            <div className="prof-text">Jane</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="last_name">{this.props.last}</label>
                        <div className="prof-text">Doe</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="email">{this.props.email}</label> <br/>
                        <div className="prof-text">JaneDoe@email.com</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="phone">{this.props.phone}</label>
                        <div className="prof-text">256485-6565</div>
                    </div>
                </div>
                    <label htmlFor="message">{this.props.about}</label>
                    <div className="prof-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
            </section>
		);
	}
}
