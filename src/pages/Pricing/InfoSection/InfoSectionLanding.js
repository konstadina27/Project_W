import React from 'react';

export class InfoIncludedSectionContainer extends React.Component {

	render(){
		return(
                    <div className="col-md-6 col-sm-6">
                        <div className="section-title">
                            <h2>{this.props.Title}</h2>
                            <h3 className="subtitle">{this.props.subTitle}</h3>
                        </div>
                        <ul className="list-unstyled bullets">
                            <li>Praesent id diam non est molestie elementum</li>
                            <li>Curabitur cursus, eros vitae tempor eleifend, magna est venenatis lectus</li>
                            <li>a volutpat lacus tortor a sem. Class aptent taciti sociosqu</li>
                            <li>ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
                            <li>Proin efficitur at diam nec pharetra</li>
                        </ul>
                    </div>
		);
	}
}
export class InfoSectionContainer extends React.Component {

	render(){
        
		return(
			<div className="col-md-6 col-sm-6">
                <div className="section-title">
                    <h2>{this.props.Title}</h2>
                    <h3 className="subtitle">{this.props.subTitle}</h3>
                </div>
                <p>
                    {this.props.text}
                </p>
            </div>
		)
	}
}