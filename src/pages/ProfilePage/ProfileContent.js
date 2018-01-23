import React from 'react';
import {FormContent} from './Form/FormContent';
import {ChangePassContent} from './Password/ChangePassContent';

 
export class ProfileContent extends React.Component {

	render(){
		return(
		    <div id="page-content">
		        <div className="container">
		            <ol className="breadcrumb">
		                <li><a href="#">Home</a></li>
		                <li><a href="#">Pages</a></li>
		                <li className="active">Contact</li>
		            </ol>
		            <section className="page-title center">
		                <h1>Your Profile</h1>
		            </section>
		            <section>
               			<div className="row">
                    		<div className="col-md-6 col-sm-6 col-md-offset-3 col-sm-offset-3">
       							<FormContent />
                    		</div>
                    	</div>
                    	<section>
							<ChangePassContent />
						</section>
                   	</section>
		        </div>
		    </div>
		);
	}
}