import React from 'react';
import {Navbar} from './Navbar';

export class Header extends React.Component {
	render(){
		return(
			<div>
	    		<header id="page-header">
	    			<Navbar />
	    		</header>
	    	</div>
    
		);
	}
}