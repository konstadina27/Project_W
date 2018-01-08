import React from 'react';
import {DetailsHeader} from './DetailsHeaderLanding';

export class DetailsHeaderContainer extends React.Component {
	render(){
		return(
			<DetailsHeader name="Marky’s Restaurant" address="63 Birch Street" rating="4" reviews="6"/>
		)
	}
}