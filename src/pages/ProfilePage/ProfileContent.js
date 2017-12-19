import React from 'react';
import {UserDetailsContainer} from './UserDetails/UserDetailsLandingContainer';
import {AboutContainer} from './About/AboutLandingContainer';
import {SocialContainer} from './Social/SocialLandingContainer';
import {ChangePassContainer} from './Password/ChangePassLandingContainer';

 
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
       							<form className="form inputs-underline">
       								<UserDetailsContainer />
       								<AboutContainer />
       								<SocialContainer />
	       							<section className="center">
		                                <div className="form-group">
		                                    <button type="submit" className="btn btn-primary btn-rounded">Save Changes</button>
		                                </div>
	                           		</section>
                           		</form>
                           		 <hr />
                    		</div>
                    	</div>
                    	<section>
							<ChangePassContainer />
						</section>
                   	</section>
		        </div>
		    </div>
		);
	}
}