import React from 'react';
import {SideBar} from './SideBarLanding';

export class SideBarContainer extends React.Component {
	render(){
		return(
		<div>
			<SideBar address="3858 Marion Street Morrisville, VT 05661" email="email@example.com" phone="316-436-8619" site="www.markysrestaurant.com" date="09.09.2018"/>
		</div>
		)
	}
}