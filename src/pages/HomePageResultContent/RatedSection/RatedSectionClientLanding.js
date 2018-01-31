import React from 'react';

export class RatedSectionClient extends React.Component {
	render(){
		return(	
       		<blockquote>
				<div className="image">
					<div className="bg-transfer">
					    <img src={this.props.img} alt="" />
					</div>
				</div>
				<h3>{this.props.name}</h3>
				<h4>{this.props.position}</h4>
				<p>{this.props.cText}</p>
			</blockquote>		
                

		)
	}
}
