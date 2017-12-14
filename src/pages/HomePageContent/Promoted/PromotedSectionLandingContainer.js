import React from 'react';
import { PromotedSection } from './PromotedSectionLanding';

export class PromotedSectionContainer extends React.Component {
	render(){
		const infoClass = "hidden" || "visible";
		let rlist =[  
                { id:"1",spInfo:"Average Price: $8 - $30",infoClass:"hidden",type:"Restaurant",name:"Marky’s Restaurant",address:"63 Birch Street",img:"assets/img/items/1.jpg",dataRating:"4", rData:"6" },
                { id:"23",spInfo:"Starts from: $14.99",infoClass:"hidden",type:"TRIP",name:"Nascar Racing",address:"london Airport",img:"assets/img/items/11.jpg",dataRating:"4", rData:"6" },
                { id:"3",infoClass:"visibe",infoClassCal:"12.08.2016",infoClassClo:"08:00",type:"Event",name:"Food Festival",address:"63 Birch Street",img:"assets/img/items/4.jpg",dataRating:"4", rData:"6" },
                { id:"4",spInfo:"Average Price: $8 - $30",infoClass:"hidden",type:"Lounge",name:"Cosmopolit",address:"4696 Jim Rosa Lane",img:"assets/img/items/5.jpg",dataRating:"4", rData:"6" },
                { id:"6",infoClass:"hidden",type:"Event",name:"Stand Up Show",address:"63 Birch Street",img:"assets/img/items/6.jpg",dataRating:"4", rData:"6" },
                { id:"8",spInfo:"Get to know yor town!",infoClass:"hidden",type:"Event",name:"City Tour",address:"63 Birch Street",img:"assets/img/items/10.jpg",dataRating:"4", rData:"6" },
                { id:"5",infoClass:"hidden",type:"Real Estate",name:"Beautiful Luxury Villa",address:"59 Water Street",img:"assets/img/items/28.jpg",dataRating:"4", rData:"6" },
                { id:"7",spInfo:"Average Price: $8 - $30",infoClass:"hidden",type:"Bar",name:"Fiesta Bar",address:"3524 Bryan Avenue",img:"assets/img/items/12.jpg",dataRating:"4", rData:"6" },
                { id:"16",infoClass:"hidden",type:"Adrenaline",name:"Senior C# Developer",address:"ERF Solutions",img:"assets/img/items/16.jpg",dataRating:"5", rData:"17" },

          		];
          	let rlists = rlist.map(list => {

        			return  <PromotedSection spInfo={list.spInfo} infoClass={list.infoClass} infoClassCal={list.infoClassCal} infoClassClo={list.infoClassClo} type={list.type} name={list.name} address={list.address} img={list.img} dataRating={list.dataRating} rDat={list.rData} key={list.id}/>

        		})
		return(
			<section className="block background-is-dark">
	            <div className="container">
	                <div className="section-title vertical-aligned-elements">
	                    <div className="element">
	                        <h2>{this.props.title}</h2>
	                    </div>
	                    <div className="element text-align-right">
	                        <a href="#" className="btn btn-framed btn-rounded btn-default invisible-on-mobile">{this.props.bTitle}</a>
	                        <div id="gallery-nav"></div>
	                    </div>
	                </div>
	            </div>
	            <div className="gallery featured">
	               <div className="owl-carousel" data-owl-items="6" data-owl-loop="1" data-owl-auto-width="1" data-owl-nav="1" data-owl-dots="1" data-owl-nav-container="#gallery-nav">
	               		{rlists}
	       			</div>
	       		</div>
		       	<div className="background-wrapper">
	                <div className="background-color background-color-default"></div>
	            </div>
	        </section>
		);
	}
}