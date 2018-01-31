import React from 'react';

export class SubSection extends React.Component {
	render(){
		return(
		<section className="block big-padding">
            <div className="container">
                <div className="vertical-aligned-elements">
                    <div className="element width-50">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="element width-50">
                        <form className="form form-email inputs-underline" id="form-subscribe">
                            <div className="input-group">
                                <input type="text" className="form-control" name="email" placeholder="Your email" required="" />
                                <span className="input-group-btn">
                                    <button className="btn" type="submit"><i className="arrow_right"></i></button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="background-wrapper">
                <div className="background-color background-color-black opacity-5"></div>
            </div>
        </section>

			);

	}
}