import React from 'react';
import {Menu} from './MenuLanding';

export class MenuContainer extends React.Component {
	render(){
		let rlist =[  
                { id:"1",img:"assets/img/person-02.jpg",title:"Meal 1",url:"www.youtube.com/",text:"Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis"},
                { id:"2",img:"assets/img/person-01.jpg",title:"Meal 2",url:"www.youtube.com/",text:"Vestibulum vel est massa. Integer pellentesque non augue et accumsan. Maecenas molestie elit nibh,vel vestibulum leo condimentum quis. Duis ac orci a magna auctor vehicula."},
                ];

                 let rlists = rlist.map(list => {

                    return  <Menu img={list.img} title={list.title} url={list.url} text={list.text} key={list.id}/>

                })
		return(
		<div>
			{rlists}
		</div>
		)
	}
}