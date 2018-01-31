import React from 'react';
import { ListingsContainer } from './ListingLaddingContainer';

export class Listings extends React.Component {
	render(){
		return(
        <section className="block">
            <div className="container">
                <div className="section-title">
                    <div className="center">
                        <h2>Browse Our Listings</h2>
                    </div>
                </div>
                <div className="categories-list">
                    <div className="row">
               			 <ListingsContainer faType = "fa fa-paint-brush" listTitleNum="0" />
               			 <ListingsContainer faType = "fa fa-suitcase" listTitleNum="1" />
               			 <ListingsContainer faType = "fa fa-desktop" listTitleNum="2" />
               			 <ListingsContainer faType = "fa fa-graduation-cap" listTitleNum="3" />
               		</div>
               		<div className="row">
               			 <ListingsContainer faType = "fa fa-television" listTitleNum="4" />
               			 <ListingsContainer faType = "fa fa-university" listTitleNum="5" />
               			 <ListingsContainer faType = "fa fa-heart" listTitleNum="6" />
               			 <ListingsContainer faType = "fa fa-newspaper-o" listTitleNum="7" />
               		</div>
               	</div>
            </div>
        </section>
		);
	}
}