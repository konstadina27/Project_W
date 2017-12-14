import React from 'react';
import {PricingBox , PricingBoxDescription} from './PricingBoxLanding';


export class PricingBoxContent extends React.Component {
	render(){

		let boxes= [
			{id:'1', title: "Silver", price:'$9.99', email:"icon_check" , phone:"icon_check",monthly:"icon_close",profile:"icon_close",time:"3 hours", classCont:"pricing box", btnClass: "btn btn-primary btn-rounded"},
			{id:'2', title: "Gold", price:'$19.99', email:"icon_check" , phone:"icon_check",monthly:"icon_check",profile:"icon_close",time:"3 hours", classCont:"pricing box featured", btnClass: "btn btn-default btn-rounded"},
			{id:'3', title: "Platinum", price:'$29.99', email:"icon_check" , phone:"icon_check",monthly:"icon_close",profile:"icon_check",time:"3 hours",classCont:"pricing box", btnClass: "btn btn-primary btn-rounded"},

			]

		let boxes2= [
			{id:'1', title: "Silver", price:'$9.99',email:"icon_check" , phone:"icon_check",monthly:"icon_check",profile:"icon_close",time:"3 hours", classCont:"pricing", btnClass: "btn btn-primary btn-framed btn-rounded btn-light-frame"},
			{id:'2', title: "Gold", price:'$19.99',email:"icon_check" , phone:"icon_check",monthly:"icon_check",profile:"icon_close",time:"3 hours", classCont:"pricing featured", btnClass: "btn btn-primary btn-rounded"},
			{id:'3',  title: "Platinum", price:'$29.99', email:"icon_check" , phone:"icon_check",monthly:"icon_check",profile:"icon_close",time:"3 hours", classCont:"pricing", btnClass: "btn btn-primary btn-framed btn-rounded btn-light-frame"},

			]

			let final = boxes.map(box => {
		
		               	return  <PricingBox classCont={box.classCont} title={box.title} price={box.price} time={box.time} email={box.email} phone={box.phone} monthly={box.monthly} profile={box.profile} btnClass={box.btnClass} key={box.id} />
		  	    
		  	    		})
			let final2 = boxes2.map(box => {
		
		               	return  <PricingBox classCont={box.classCont} title={box.title} price={box.price} time={box.time} email={box.email} phone={box.phone} monthly={box.monthly} profile={box.profile} btnClass={box.btnClass} key={box.id} />
		  	    
		  	    		})

		return(
			<div>
				<section>
	                <div className="row">
		                <PricingBoxDescription />
		                {final}
		                <PricingBoxDescription />
		                {final2}
		            </div>				
		        </section>
		    </div>

			
		);

	}
}