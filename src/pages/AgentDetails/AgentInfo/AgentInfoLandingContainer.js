import React from 'react';
import {AgentInfo} from './AgentInfoLanding';

export class AgentInfoContainer extends React.Component {
	render(){
		return(
			<div> 
				<AgentInfo img="assets/img/person-01.jpg" name="Jane Doe" address="3858 Marion Street Morrisville, VT 05661"
				desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis aliquam finibus. Nullam at ante et nulla vehicula euismod ut eget urna." 
				phone="(123) 456 789" email="jane.doe@example.com" date="09.09.2018 - 09.09.2019" price="1000" site="www.janedoe.com"/>
			</div>
		)
	}
}

	            