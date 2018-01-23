import React from 'react';
import {Listing} from './ListingLanding';

export class ListingContainer extends React.Component {

	render(){
		let rlist =[  
                { 
                id:"1", Topclass:"circle",ribbon:"ribbon hidden",img:"assets/img/items/1.jpg",title:"Spring Hotel",location:"Montenegro",type:"Hotel",
                addClass:"additional-info",addClass2:"additional-info2 hidden",priceT:"Happy Hour 18:00 - 19:00",featured:"featured yes",
                featicon:"fa fa-check",view:"426",review:"45",rating:"4",ratingReview:"6",edited:"Today 15:32"
            	},
            	{
                id:"2", Topclass:"circle hidden",ribbon:"ribbon hidden",img:"assets/img/items/2.jpg",title:"Iron Apple",location:"4209 Glenview Drive",type:"Restaraunt",
                addClass:"additional-info hidden",addClass2:"additional-info2 hidden",priceT:"Happy Hour 18:00 - 19:00",featured:"featured",
                featicon:"fa fa-times",view:"230",review:"28",rating:"5",ratingReview:"19",edited:"Yesterday 10:45"
            	},
            	{
                id:"3", Topclass:"circle hidden",ribbon:"ribbon",img:"assets/img/items/3.jpg",title:"Bamby Planet Houseboat Bar & Grill",location:"3857 Josh Lane",type:"BAR & GRILL",
                addClass:"additional-info hidden",addClass2:"additional-info2",priceT:"Happy Hour 18:00 - 19:00",featured:"featured",
                featicon:"fa fa-times",view:"230",review:"28",rating:"4",ratingReview:"12",edited:"12.05.2016 11:05"
            	},
            	{
                id:"4", Topclass:"circle hidden",ribbon:"ribbon hidden",img:"assets/img/items/4.jpg",title:"Food Festival",location:"840 My Drive",type:"Event",
                addClass:"additional-info hidden",addClass2:"additional-info2",priceT:"Free Entry",featured:"featured",
                featicon:"fa fa-times",view:"230",review:"28",rating:"3",ratingReview:"3",edited:"12.02.2016 08:50"
            	},
          		];

                 let rlists = rlist.map(list => {

        			return <Listing key={list.id} Topclass={list.Topclass} ribbon={list.ribbon} img={list.img} 
        			title={list.title} location={list.location} type={list.type} addClass={list.addClass} addClass2={list.addClass2} priceT={list.priceT}
        			featured={list.featured} featicon={list.featicon} view={list.view} review={list.review} rating={list.rating} ratingReview={list.ratingReview} edited={list.edited} />
        		})
		return(
			<div className="my-items table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Listings</th>
                            <th>Featured</th>
                            <th>Views</th>
                            <th>Reviews</th>
                            <th>Rating</th>
                            <th>Last Edited</th>
                        </tr>
                    </thead>
			    	{rlists}
			    </table>
		    </div>
		);
	}
}