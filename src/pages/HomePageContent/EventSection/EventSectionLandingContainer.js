import React from 'react';
import { EventSection }from './EventSectionLanding';

export class EventSectionContainer extends React.Component {
	render(){
        let rlist =[  
                { id:"1",date:"22",month:"Jun",evTitle:"Lorem ipsum dolor sit amet",time:"08:00",evText:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque."},
                { id:"2",date:"04",month:"Jul",evTitle:"Donec mattis mi vitae volutpat",time:"12:00",evText:"Nullam vitae ex ac neque viverra ullamcorper eu at nunc. Morbi imperdiet." },
                { id:"3",date:"12",month:"Aug",evTitle:"Vivamus placerat", time:"12:00", evText:"Aenean sed purus ut massa scelerisque bibendum eget vel massa.",time:"08:00",evText:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque."},
                ];

                 let rlists = rlist.map(list => {

                    return  <EventSection evTitle={list.evTitle} date={list.date} evText={list.evText} time={list.time} key={list.id}/>

                })
		return(
			<section className="block">
	            <div className="container">
	                <div className="section-title">
	                    <h2>{this.props.title}</h2>
	                </div>
		            <div className="row">
			          	{rlists}
			        </div>
		            <div className="background-wrapper">
	                    <div className="background-color background-color-black opacity-5"></div>
	                </div>
               	</div>
	        </section>
		);
	}
}