import React from 'react';
import { AgentListing } from './AgentlistingLanding';
 
export class AgentListingContainer extends React.Component {
	render(){
		let rlist =[  
                { id:"1",ribbonClass:"ribbon",ribbonT:"Top",name:"Jane Doe",img:"assets/img/items/1.jpg", listCount:"23 Listings",phone:"(123) 456 789",email:"jane.doe@example.com"},
                { id:"2",ribbonClass:"hidden",name:"Monica Smith",img:"assets/img/items/2.jpg",listCount:"12 Listings",phone:"(123) 520-432-6484",email:"monica@example.com"},
                { id:"3",ribbonClass:"hidden",name:"Juanita Shields",img:"assets/img/items/3.jpg",listCount:"41 Listings",phone:"(123) (123) 816-679-4309",email:"juanita@example.com"},
                { id:"4",ribbonClass:"hidden",name:"John Doe",img:"assets/img/items/4.jpg",listCount:"36 Listings",phone:"(123) 816-679-4309",email:"john@example.com"},
                { id:"5",ribbonClass:"hidden",name:"Tia Fountain",img:"assets/img/items/5.jpg",listCount:"23 Listings",phone:"(123) 816-679-4309",email:"tia@example.com"},
                { id:"6",ribbonClass:"hidden",name:"Mark Brown",img:"assets/img/items/28.jpg",listCount:"33 Listings",phone:"(123) 541-882-3782",email:"mark@example.com"},
          		];

          let rlists = rlist.map(list => {

        		return <AgentListing key={list.id} ribbonClass={list.ribbonClass} ribbonT={list.ribbonT} name={list.name}  img={list.img} listCount={list.listCount} phone={list.phone} email={list.email}/>
       		 })
		return(
			<section>
				{rlists}
			</section>
		);
	}
}