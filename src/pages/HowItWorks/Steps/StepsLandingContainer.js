import React from 'react';
import {Steps} from './StepsLanding';

export class StepsContainer extends React.Component {

	render(){
		let rlist =[  
                { id:"1",stepCount:"1",navPage:"/register",circleOpacity:"circle-bg opacity-30",title:"Register an Account",text:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus.",buttonText:"Register an account" },
                { id:"2",stepCount:"2",navPage:"/pricing",circleOpacity:"circle-bg opacity-60",title:"Choose a Plan",text:"Curabitur consectetur ligula in cursus sagittis. Praesent purus velit, sagittis vel malesuada nec, ultricies vitae quam.",buttonText:"Choose a plan" },
                { id:"3",stepCount:"3",navPage:"/editlisting",circleOpacity:"circle-bg opacity-90",title:"Submit Your Item",text:"nteger lacinia sem in libero iaculis, ac sollicitudin tortor elementum.Donec lorem orci, egestas eu condi",buttonText:"Submit Item" },

           		];

                 let rlists = rlist.map(list => {

        			return <Steps key={list.id} navPage={list.navPage} stepCount={list.stepCount} circleOpacity={list.circleOpacity} title={list.title} text={list.text} buttonText={list.buttonText}/>
        		})
		return(
			<div>
			    {rlists}
		    </div>
		);
	}
}