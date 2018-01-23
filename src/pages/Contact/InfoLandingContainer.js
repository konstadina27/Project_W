import React from 'react';
import {InfoLanding} from './InfoLanding'

export class InfoLandingContainer extends React.Component {
	render(){
		return(
            <InfoLanding address="4758 Nancy Street" phone="+1 919-571-2528" email="hello@example.com" customCare="support@example.com"/>
		)
	}
}