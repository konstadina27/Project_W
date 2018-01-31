import React from 'react';
import {BlockRecent} from './BlockRecentLanding';

export class BlockRecentContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",containerClass:"col-md-3 col-sm-3",spInfo:"Average Price: $8 - $30",type:"Restaurant",name:"Marky’s Restaurant",address:"63 Birch Street",img:"assets/img/items/1.jpg",dataRating:"4",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"6" },
                { id:"2",containerClass:"col-md-3 col-sm-3",type:"Restaurant",name:"Ironapple",address:"4209 Glenview Drive",img:"assets/img/items/2.jpg",dataRating:"3",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"6" },
                { id:"15",containerClass:"col-md-6 col-sm-6",spInfo:"Happy Hour: 18:00-19:00",type:"BAR & GRILL",name:"Bambi Planet Houseboat Bar& Grill",address:"3857 Losh Lane",img:"assets/img/items/3.jpg",dataRating:"5",checkClass:"circle",ribbonClass:"ribbon",rData:"56" },
                { id:"3",containerClass:"col-md-4 col-sm-4",spInfo:"Starts at: 19:00",type:"EVENT",name:"Food Festival",address:"840 My Drive",img:"assets/img/items/4.jpg",dataRating:"5",checkClass:"circle",ribbonClass:"ribbon",rData:"43" },
                { id:"4",containerClass:"col-md-3 col-sm-3",type:"LOUNGE",name:"Cosmopolit",address:"2896 Ripple Street",img:"assets/img/items/5.jpg",dataRating:"5",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"6" },
                { id:"6",containerClass:"col-md-5 col-sm-5",spInfo:"Free entry",type:"CONCERT",name:"Stand Up Show",address:"371 Kinney Street",img:"assets/img/items/6.jpg",dataRating:"0",checkClass:"circle hidden",ribbonClass:"ribbon hidden",rData:"0" },

          		];

                 let rlists = rlist.map(list => {

        			return <BlockRecent key={list.id} containerClass={list.containerClass} spInfo={list.spInfo} type={list.type} name={list.name} address={list.address} dataRating={list.dataRating} img={list.img} checkClass={list.checkClass} ribbonClass={list.ribbonClass} rData={list.rData}/>
        		})
		return(
			<div>
		        <section className="block">
		            <div className="container">
		                <div className="center">
		                    <div className="section-title">
		                        <div className="center">
		                            <h2>Recent Places</h2>
		                            <h3 className="subtitle">Fusce eu mollis dui, varius convallis mauris. Nam dictum id</h3>
		                        </div>
		                    </div>
		                </div>
		                <div className="row">
			                {rlists}
			            </div>
			         	<div className="center">
		                    <a href="listing.html" className="btn btn-primary btn-light-frame btn-rounded btn-framed arrow">View all listings</a>
		                </div>
		            </div>
		        </section>
		    </div>
		);
	}
}