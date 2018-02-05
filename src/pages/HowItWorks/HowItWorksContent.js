import React from 'react';
import {StepsContainer} from './Steps/StepsLandingContainer';
import {Included} from './Included/IncludedLanding';
import {ClientsContainer} from './Clients/ClientsLandingContainer'

export class HowItWorksContent extends React.Component {
	render(){
		return(
	    <div id="page-content">
	        <div className="container">
	            <ol className="breadcrumb">
	                <li><a href="#">Home</a></li>
	                <li><a href="#">Pages</a></li>
	                <li className="active">Contact</li>
	            </ol>
	            <section className="center page-title">
	                <h1>How It Works</h1>
	                <h3 className="subtitle">Promote your item in three simple steps</h3>
	            </section>
	            <section>
	            	 <div className="row">
	            	 	<StepsContainer />
	            	 </div>
	            </section>
	            <section>
                	<div className="row">
                		<div className="col-md-6 col-sm-6">
                			<Included />
                		</div>
			            <div class="col-md-6 col-sm-6">
			                <div class="section-title">
			                    <h2>Our Satisfied Clients</h2>
			                    <h3 class="subtitle">All we do is for satisfaction of our clients</h3>
			                </div>
               				<ClientsContainer/>
                		</div>
               		</div>
               	</section>
	       	</div>
		</div>
	 
		)
	}
}