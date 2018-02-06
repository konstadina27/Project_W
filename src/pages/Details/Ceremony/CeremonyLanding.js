import React from 'react';
import {ImageContainer} from './imgContainer';

export class Ceremony extends React.Component{
	render(){
		return(
			<div className="row">
				<div className="panel-group" id="accordion">
				    <div className="panel panel-default">
				      	<div className="panel-heading">
					        <h4 className="panel-title">
					          <a data-toggle="collapse" aria-expanded={this.props.collapsed} data-parent="#accordion" href={this.props.collapseId}>{this.props.title}</a>
					        </h4>
						    <div id={this.props.panelId} className="collapse">
						        <div className="panel-body">
						        	<div className="row">
						        		<ImageContainer />
						        	</div>
						        	<div className="cer-description">
						        		<h4>Description</h4>
						        		<p>{this.props.desc} </p>
						        		<p><a href="">{this.props.url}</a></p>
						        	</div>
						        </div>
						    </div>
					    </div>
				    </div>
				</div>
			</div>
		)
	}
}