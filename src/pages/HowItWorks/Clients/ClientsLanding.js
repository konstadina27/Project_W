import React from 'react';

export class Clients extends React.Component {
    render(){
        return(
        	<div>
		        <blockquote>
		            <div className="image">
		                <div className="bg-transfer">
		                    <img src={this.props.img} alt="" />
		                </div>
		            </div>
		            <h3>{this.props.name}</h3>
		            <h4>{this.props.position}</h4>
		            <p>{this.props.text}</p>
		        </blockquote>
            </div>
        )
    }
}