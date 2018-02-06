import React from 'react';
import {Ceremony} from './CeremonyLanding';

	export class CeremonyContainer extends React.Component{
	render(){
		let rlist =[  
                { id:"1",collapsed:"false",collapseId:"#collapse1",panelId:"collapse1",title:"Ceremony Package 1",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"},
                { id:"2",collapsed:"false",collapseId:"#collapse2",panelId:"collapse2",title:"Ceremony Package 2",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"},
                { id:"3",collapsed:"false",collapseId:"#collapse3",panelId:"collapse3",title:"Ceremony Package 3",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",url:"www.youtube.com"}

          		];

          let rlists = rlist.map(list => {
          	
        		return <Ceremony key={list.id} collapsed={list.collapsed} collapseId={list.collapseId} panelId={list.panelId}  title={list.title} desc={list.desc} url={list.url}/>

        	});
		return(
			<div>
				{rlists}
			</div>
		)
	}
}