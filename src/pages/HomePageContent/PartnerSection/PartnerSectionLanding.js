import React from 'react';

export class PartnerSection extends React.Component {
	render(){
		return(
            <div className="logo">
                <a href="#"><img src={this.props.img} alt="" /></a>
            </div>
		);
	}
}