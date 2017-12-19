import React from 'react';
import { PartnerSection }from './PartnerSectionLanding';

export class PartnerSectionContainer extends React.Component {
	render(){
 let rlist =[  
                { id:"1",img:"assets/img/logo-1.png"},
                { id:"2",img:"assets/img/logo-2.png" },
                { id:"3",img:"assets/img/logo-3.png"},
                { id:"4",img:"assets/img/logo-4.png" },
                { id:"5",img:"assets/img/logo-5.png"},
                ];

                 let rlists = rlist.map(list => {

                    return  <PartnerSection img={list.img} key={list.id}/>

                })
		return(
			<section className="block">
	            <div className="container">
	                <div className="center section-title opacity-40">
                   		<h5>{this.props.title}</h5>
                	</div>
                	<div className="logos">
	                	{rlists}
	                </div>
	 			</div>
       		 </section>
		);
	}
}