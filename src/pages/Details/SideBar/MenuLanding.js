import React from 'react';

export class Menu extends React.Component {
	render(){
		return(
		<div>
            <div className="review">
                <div className="image2"> 
                    <div className="bg-transfer"><img src={this.props.img} alt="" /></div>
      	        </div>
                <div className="description">
                    <div className="title"><strong>{this.props.title}</strong></div>
                    <p>{this.props.text}</p>
                    <p><a href="">{this.props.url}</a></p>
                </div>
	        </div>
		</div>
		)
	}
}