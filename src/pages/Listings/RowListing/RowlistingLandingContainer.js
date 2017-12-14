import React from 'react';
import { Rowlisting } from './RowlistingLanding';
 
export class RowlistingContainer extends React.Component {
	render(){
		let rlist =[  
                { id:"1",ribbonClass:"hidden",info:"Average Price: $8 - $30",type:"Restaurant",name:"Marky’s Restaurant",address:"63 Birch Street",img:"assets/img/items/1.jpg",data:"3",reviews:"8",latitude:"40.72807182",longitude:"-73.85735035"},
                { id:"2",ribbonClass:"hidden",type:"Restaurant",name:"Ironapple",address:"4209 Glenview Drive",img:"assets/img/items/2.jpg",data:"5",reviews:"8",latitude:"40.73925841",longitude:"-73.85348797"},
                { id:"3",ribbonClass:"ribbon",ribbonT:"Top",info:"Happy hour: 18:00 - 19:00",type:"Bar & Grill",name:"Bambi Planet Houseboat Bar& Grill ",address:"3857 Losh Lane",img:"assets/img/items/3.jpg",data:"3",reviews:"8",latitude:"40.73659201",longitude:"-73.80778313"},
                { id:"4",ribbonClass:"hidden",ribbonT:"Top",info:"Starts at 19:00",type:"Event",name:"Food Festival",address:"23 Hillhaven Drive",img:"assets/img/items/4.jpg",data:"3",reviews:"8",latitude:"40.73659201",longitude:"-73.80778313"},
                { id:"5",ribbonClass:"hidden",type:"Lounge",name:"Cosmopolit",address:"4209 Glenview Drive",img:"assets/img/items/5.jpg",data:"5",reviews:"9",latitude:"40.709016",longitude:"-73.844969"},
                { id:"6",ribbonClass:"ribbon",ribbonT:"Sale",info:"Average Price: $8 - $30",type:"Real Estate",name:"Beautiful Luxury Villa",address:"3284 Hillside Street",img:"assets/img/items/28.jpg",data:"3",reviews:"8",latitude:"40.71447628",longitude:"-73.8821125"},
          		];

          let rlists = rlist.map(list => {

        		return  <Rowlisting key={list.id} ribbonClass={list.ribbonClass} ribbonT={list.ribbonT} info={list.info} type={list.type} name={list.name} address={list.address} img={list.img} data={list.data} reviews={list.reviews} latitude={list.latitude} longitude={list.longitude}/>

       		 })
		return(
			<section>
				{rlists}
			</section>
		);
	}
}