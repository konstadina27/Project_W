import React from 'react';
import {UserDetails} from './UserDetailsLandingView';

export class UserDetailsContainer extends React.Component {
	render(){
		return(
			<UserDetails img="assets/img/person-01.jpg" planText="Your current plan" pictText="Upload a picture" package="Gold Package" paymentText="Next payment:" date="24/12/2015"/>
		)
	}
}