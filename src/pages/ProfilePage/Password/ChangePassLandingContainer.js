import React from 'react';
import {ChangePass} from './ChangePassLanding';

export class ChangePassContainer extends React.Component {
	render(){
		return(
			<section>
				<div className="row">
					<div className="col-md-4 col-sm-4 col-md-offset-4 col-sm-offset-4">
						<ChangePass title="Change Your Password"/>
					</div>
	       		</div>
       		</section>
			
		)
	}
}