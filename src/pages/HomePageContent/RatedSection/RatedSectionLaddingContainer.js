import React from 'react';
import { BlockRecentContainer } from '../BlockRecent/BlockRecentLaddingContainer';

export class RatedSectionContainer extends React.Component {
	render(){
		return(	
			<div>
				<BlockRecentContainer containerClass="col-md-4 col-sm-4" dataRating="3" type="Restaurant" name="Ironapple" address="4209 Glenview Drive" dataId="2" img="assets/img/items/2.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="13"/>
				<BlockRecentContainer containerClass="col-md-5 col-sm-5" dataRating="5" spInfo="Starts at: 19:00" type="EVENT" name="Food Festival" address="840 My Drive" dataId="3" img="assets/img/items/4.jpg" checkClass="circle" ribbonClass="ribbon" rData="12"/>
				<BlockRecentContainer containerClass="col-md-3 col-sm-3" dataRating="5" type="LOUNGE" name="Cosmopolit" address="2896 Ripple Street" dataId="4"  img="assets/img/items/5.jpg" checkClass="circle hidden" ribbonClass="ribbon hidden" rData="43" />
			</div>
		);
	}
}
export class RatedSectionClient extends React.Component {
	render(){
		return(	
			<div>
                <blockquote>
                    <div className="image">
                        <div className="bg-transfer">
                            <img src={this.props.img} alt="" />
                        </div>
                    </div>
                    <h3>{this.props.name}</h3>
                    <h4>{this.props.position}</h4>
                    <p>{this.props.cText}</p>
                </blockquote>
            </div>
		)
	}
}