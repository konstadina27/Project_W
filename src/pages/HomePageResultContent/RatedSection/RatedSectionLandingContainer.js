import React from 'react';
import {RatedSection} from './RatedSectionLanding';
import {RatedSectionClient} from './RatedSectionClientLanding';

export class RatedSectionContainer extends React.Component {
	render(){
		let rlist =[  
                { id:"2",containerClass:"col-md-4 col-sm-4",type:"Restaurant",name:"Ironapple",address:"4209 Glenview Drive",img:"assets/img/items/2.jpg",dataRating:"3",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"13" },
                { id:"3",containerClass:"col-md-5 col-sm-5",spInfo:"Starts at: 19:00",type:"EVENT",name:"Food Festival",address:"840 My Drive",img:"assets/img/items/4.jpg",dataRating:"5",checkClass:"circle",ribbonClass:"ribbon",rData:"12" },
                { id:"4",containerClass:"col-md-3 col-sm-3",type:"LOUNGE",name:"Cosmopolit",address:"2896 Ripple Street",img:"assets/img/items/5.jpg",dataRating:"5",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"43" },
          		];

                 let rlists = rlist.map(list => {
        			return <RatedSection key={list.id} containerClass={list.containerClass} spInfo={list.spInfo} type={list.type} name={list.name} address={list.address} dataRating={list.dataRating} img={list.img} checkClass={list.checkClass} ribbonClass={list.ribbonClass} rData={list.rData}/>
        		})
		let clist =[  
                { id:"1",img:"assets/img/person-01.jpg",name:"Jane Woodstock",position:"CEO at ArtBrands",cText:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel."},
                { id:"2",img:"assets/img/person-04.jpg",name:"Peter Doe",position:"CEO at ArtBrands",cText:"Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales."},
          		];

                 let clists = clist.map(list => {
        			return <RatedSectionClient key={list.id} img={list.img} name={list.name} position={list.position} cText={list.cText}/>
        		})
		return(	
			<section className="block">
            	<div className="container">
                	<div className="row">
                		<div className="col-md-9 col-sm-9">
				            <div className="section-title">
				                <h2>{this.props.title}</h2>
				            </div>
		               		<div className="row">
                			{rlists}
                			</div>
                		</div>
                		<div className="col-md-3 col-sm-3">
				            <div className="section-title">
				                <h2>{this.props.cTitle}</h2>
				            </div>
				           	<div className="testimonials center box">
                				<div className="owl-carousel" data-owl-items="1" data-owl-nav="0" data-owl-dots="1">
                					{clists}
                				</div>
                			</div>
                		</div>
                	</div>
                </div>
            </section>
		);
	}
}



