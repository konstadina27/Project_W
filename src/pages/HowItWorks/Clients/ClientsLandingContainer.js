import React from 'react';
import {Clients} from './ClientsLanding';

export class ClientsContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",img:"assets/img/person-01.jpg",name:"Jane Woodstock",position:"CEO at ArtBrands",text:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel."},
                { id:"2",img:"assets/img/person-02.jpg",name:"Peter Doe",position:"CEO at ArtBrands",text:"Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales."},

           		];

                 let rlists = rlist.map(list => {

        			return <Clients key={list.id} img={list.img} name={list.name} position={list.position} text={list.text}/>
        		})
		return(
			<div>
			    <div className="testimonials">
	        		<div className="owl-carousel" data-owl-items="1" data-owl-nav="0" data-owl-dots="1">
			    {rlists}
			    </div>
			    </div>
		    </div>
		);
	}
}