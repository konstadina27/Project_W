import React from 'react';
 
export class Social extends React.Component {
	render(){
		return(
			<section>
                <h3>{this.props.title}</h3>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="facebook">Facebook</label>
                            <input type="text" className="form-control" name="facebook" id="facebook" placeholder="Facebook" />
                         </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="twitter">Twitter</label>
                           	<input type="text" className="form-control" name="twitter" id="twitter" placeholder="Twitter" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="pinterest">Pinterest</label>
                            <input type="text" className="form-control" name="pinterest" id="pinterest" placeholder="Pinterest" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <label htmlFor="youtube">Youtube</label>
                            <input type="text" className="form-control" name="youtube" id="youtube" placeholder="Youtube" />
                        </div>
                    </div>
                </div>
            </section>
		);
	}
}