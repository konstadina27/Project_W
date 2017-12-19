import React from 'react';
import {About} from './AboutLanding';

export class AboutContainer extends React.Component {
	render(){
		return(
			<About title="About You" first="First Name" last="Last Name" email="Email" phone="Phone" about="About You"/>
		)
	}
}