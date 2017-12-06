import React from 'react';
import {BlockRecentContainer} from './BlockRecentLaddingContainer';

export class BlockRecent extends React.Component {
	render(){
		return(
			<div>
		        <section className="block">
		            <div className="container">
		                <div className="center">
		                    <div className="section-title">
		                        <div className="center">
		                            <h2>Recent Places</h2>
		                            <h3 className="subtitle">Fusce eu mollis dui, varius convallis mauris. Nam dictum id</h3>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">
			                <BlockRecentContainer containerClass="col-md-3 col-sm-3" dataRating="4" spInfo="Average Price: $8 - $30" type="RESTAURANT" name="Marky’s Restaurant" address="63 Birch Street" dataId="1" img="assets/img/items/1.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="6"/>
			                <BlockRecentContainer containerClass="col-md-3 col-sm-3" dataRating="3" type="RESTAURANT" type="BAR & GRILL" name="Ironapple" address="4209 Glenview Drive" dataId="2" img="assets/img/items/2.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="13"/>
			                <BlockRecentContainer containerClass="col-md-6 col-sm-6" dataRating="5" spInfo="Happy Hour: 18:00-19:00" type="BAR & GRILL" name="Bambi Planet Houseboat Bar& Grill" address="3857 Losh Lane" dataId="15" img="assets/img/items/3.jpg" checkClass="circle" ribbonClass="ribbon" rData="56"/>
			                <BlockRecentContainer containerClass="col-md-4 col-sm-4" dataRating="5" spInfo="Starts at: 19:00" type="EVENT" name="Food Festival" address="840 My Drive" dataId="3" img="assets/img/items/4.jpg" checkClass="circle" ribbonClass="ribbon" rData="12"/>
			                <BlockRecentContainer containerClass="col-md-3 col-sm-3" dataRating="5" type="LOUNGE" name="Cosmopolit" address="2896 Ripple Street" dataId="4"  img="assets/img/items/5.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="43"/>
			                <BlockRecentContainer containerClass="col-md-5 col-sm-5" dataRating="0" spInfo="Free entry" type="CONCERT" name="Stand Up Show" address="371 Kinney Street" dataId="6" img="assets/img/items/6.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="0"/>
			            </div>
			         	<div className="center">
		                    <a href="listing.html" className="btn btn-primary btn-light-frame btn-rounded btn-framed arrow">View all listings</a>
		                </div>
		            </div>
		        </section>
		    </div>
		);
	}
}