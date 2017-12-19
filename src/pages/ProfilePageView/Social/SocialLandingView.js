import React from 'react';
 
export class Social extends React.Component {
	render(){
		return(
			<section>
                <h3>{this.props.title}</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="facebook">Facebook</label>
                        <div className="prof-text">www.facebook.com/profile</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="twitter">Twitter</label>
                        <div className="prof-text">www.twitter.com/profile</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="pinterest">Pinterest</label>
                        <div className="prof-text">www.pinterest.com/profile</div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <label htmlFor="youtube">Youtube</label>
                        <div className="prof-text">www.youtube.com/profile</div>
                    </div>
                </div>
            </section>
		);
	}
}