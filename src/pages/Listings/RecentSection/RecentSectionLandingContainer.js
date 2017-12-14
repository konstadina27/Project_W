import React from 'react';
import { RecentSection } from './RecentSectionLanding';
 
export class RecentSectionContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",info:"Average Price: $8 - $30",type:"Restaurant",name:"Marky’s Restaurant",address:"63 Birch Street",img:"assets/img/items/1.jpg",data:"",reviews:"" },
                { id:"2",type:"Restaurant",name:"Ironapple",address:"4209 Glenview Drive",img:"assets/img/items/2.jpg" },
                { id:"15",info:"Happy hour: 18:00 - 19:00",type:"Bar & Grill",name:"Bambi Planet Houseboat Bar& Grill",address:"3857 Losh Lane",img:"assets/img/items/3.jpg" },
          		];

                 let rlists = rlist.map(list => {

        			return  <RecentSection info={list.info} type={list.type} name={list.name} address={list.address} img={list.img} key={list.id}/>

        		})
		return(
			<section>
                <h2>Recent Items</h2>
				{rlists}
			</section>
		);
	}
}