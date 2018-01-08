import React from 'react';
import {AboutContent} from './AboutComp/AboutLanding';
import {ContactContent} from './ContactComp/ContactLanding';
import {GalleryContent} from './Gallery/GalleryContent';
import {SocialContent} from './Social/SocialContent';
import {OpeningContent} from './Opening/OpeningDropDown';
import {RestaurantMenuContent} from './RestaurantMenu/RestaurantMenuContent';
import {ScheduleContent} from './Schedule/ScheduleDropDown';

export class EditListingContent extends React.Component {
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
			                <h1>Edit Listing</h1>
			            </section>
			            <section>
                			<div className="row">
       							<div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
       								<form className="form inputs-underline" encType="multipart/form-data">
       									<AboutContent/>
       									<ContactContent />
       									<GalleryContent />
       									<SocialContent />
       									<OpeningContent />
       									<RestaurantMenuContent />
       									<ScheduleContent />
       									<hr />
			                            <section className="center">
			                                <div className="form-group">
			                                    <button type="submit" className="btn btn-primary btn-rounded">Preview & Submit Listing</button>
			                                </div>
			                            </section>
       								</form>
       							</div>
                			</div>
                		</section>
			        </div>
			    </div>
		);
	}
}