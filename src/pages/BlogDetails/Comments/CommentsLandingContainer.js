import React from 'react';
import {Comments} from './CommentsLanding';

export class CommentsContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",img:"assets/img/person-02.jpg",name:"Catherine Brown",date:"12.05.2014",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, sem ut sollicitudin consectetur, augue diam ornare massa, ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris, eget suscipit mauris imperdiet vel. Nulla et massa metus. Nam porttitor quam eget ante elementum consectetur. Aenean ac nisl et nulla placerat suscipit eu a mauris. Curabitur quis augue condimentum, varius mi in, ultricies velit. Suspendisse potenti." },
                { id:"2",img:"assets/img/person-03.jpg",name:"John Doe",date:"24.06.2014",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum, sem ut sollicitudin consectetur, augue diam ornare massa, ac vehicula leo turpis eget purus. Nunc pellentesque vestibulum mauris, eget suscipit mauris." },   
                { id:"3",img:"assets/img/person-04.jpg",name:"John Doe",date:"08.05.2014",text:"Quisque iaculis neque at dui cursus posuere. Sed tristique pharetra orci, eu malesuada ante tempus nec. Phasellus enim odio, facilisis et ante vel, tempor congue sapien. Praesent eget ligula eu libero cursus facilisis vel non arcu. Sed vitae quam enim." },   

           		];

                 let rlists = rlist.map(list => {

        			return <Comments key={list.id} img={list.img} name={list.name} date={list.date} date={list.date} text={list.text} />
        		})
		return(
			<div>
			    {rlists}
		    </div>
		);
	}
}