import React from 'react';
import {Reviews} from './ReviewsLanding';

export class ReviewsContainer extends React.Component {
	render(){
		let rlist =[  
                { id:"1",img:"assets/img/person-02.jpg",rating:"4",review:"6",date:"09.05.2016",text:"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"},
                { id:"2",img:"assets/img/person-01.jpg",rating:"5",review:"6",date:"09.05.2016",text:"Vestibulum vel est massa. Integer pellentesque non augue et accumsan. Maecenas molestie elit nibh,vel vestibulum leo condimentum quis. Duis ac orci a magna auctor vehicula."},
                ];

                 let rlists = rlist.map(list => {

                    return  <Reviews img={list.img} rating={list.rating} review={list.review} date={list.date} text={list.text} key={list.id}/>

                })
		return(
		<div>
			{rlists}
		</div>
		)
	}
}