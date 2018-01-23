import React from 'react';
import {FeaturedListing} from './FeaturedListingLanding';

export class FeaturedListingContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",spInfo:"Average Price: $8 - $30",type:"Restaurant",name:"Marky’s Restaurant",address:"63 Birch Street",img:"assets/img/items/1.jpg",dataRating:"4",checkClass:"circle hidden",ribbonClass:"ribbon",rData:"6" },
                { id:"2",type:"Restaurant",name:"Ironapple",address:"4209 Glenview Drive",img:"assets/img/items/2.jpg",dataRating:"3",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"6" },
                { id:"15",spInfo:"Happy Hour: 18:00-19:00",type:"BAR & GRILL",name:"Bambi Planet Houseboat Bar& Grill",address:"3857 Losh Lane",img:"assets/img/items/3.jpg",dataRating:"5",ribbonClass:"ribbon hidden",rData:"56" }
          		];

                 let rlists = rlist.map(list => {

        			return <FeaturedListing key={list.id} spInfo={list.spInfo} type={list.type} name={list.name} address={list.address} dataRating={list.dataRating} img={list.img} ribbonClass={list.ribbonClass} rData={list.rData}/>
        		})
		return(
			<div>
			   {rlists}
		    </div>
		);
	}
}