import React from 'react';
import {Services} from './ServicesLanding';

	export class ServicesContainer extends React.Component{
	render(){
		let rlist =[  
                { id:"1",collapsed:"false",collapseId:"#collapse1",panelId:"collapse1",title:"Services Package 1",price:"1000",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"},
                { id:"2",collapsed:"false",collapseId:"#collapse2",panelId:"collapse2",title:"Services Package 2",price:"2000",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"},
                { id:"3",collapsed:"false",collapseId:"#collapse3",panelId:"collapse3",title:"Services Package 3",price:"3000",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"}

          		];

          let rlists = rlist.map(list => {
          	
        		return <Services key={list.id} collapsed={list.collapsed} collapseId={list.collapseId} panelId={list.panelId}  title={list.title} desc={list.desc} price={list.price} url={list.url}/>

        	});
		return(
			<div>
				{rlists}
			</div>
		)
	}
}