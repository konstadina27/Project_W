import React from 'react';
import { Answer } from './AnswerLanding';
 
export class AnswerContainer extends React.Component {
	render(){
		let rlist =[  
                {
                 id:"1",title:"Sed tincidunt vel orci sed fermentum. Nullam nec turpis blandit?",
                text:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel,dignissim cursus lectus.Aliquam laoreetpurus in iaculis sodales. Morbi convallis diam ac accumsan placerat. Donec ultrices placerat arcu non accumsan"
            	},
                {
                 id:"2",title:"Integer a arcu non libero euismod euismod. Donec non porta leo.",
                text:"Curabitur consectetur ligula in cursus sagittis. Praesent purus velit, sagittis vel malesuada nec, ultricies vitae quam. Maecenas aliquet convallis placerat. Aliquam erat volutpat. Nulla euismod leo eu nulla scelerisque molestie. Sed vehicula metus est eget molestie elit iaculis quis. Nulla elementum sem ex, eu lobortis urna convallis nec. Suspendisse nunc mauris, blandit sed risus eget, pretium ultricies neque. Vivamus ultricies odio sed vehicula hendrerit. Nunc ultrices scelerisque ligula sit amet aliquam."
            	},
                {
                 id:"3",title:"Fusce ut tempus lacus, pretium vestibulum diam",
                text:"laoreet purus in iaculis sodales. Morbi convallis diam ac accumsan placerat. Donec ultrices placerat arcu non accumsan"
            	},
                {
                 id:"4",title:"Mauris et mollis augue. Pellentesque habitant morbi tristique senectus",
                text:"Donec facilisis est id orci blandit aliquet. Suspendisse volutpat auctor dui in interdum. Pellentesque porttitor augue quis neque efficitur auctor. Nulla dictum euismod semper. Suspendisse volutpat rutrum enim. Nunc facilisis, massa vitae vestibulum ultrices, nulla urna molestie purus, nec ultricies nulla nibh lobortis sapien. Nulla vitae maximus erat."
            	},
                {
                 id:"5",title:"Etiam condimentum quam non dui lacinia",
                text:"Sed vel erat mi. Donec hendrerit consectetur ipsum, ut lacinia sem egestas sed. Praesent ac augue dolor. Proin euismod nulla vel ipsum cursus, nec sagittis risus volutpat. Phasellus eu quam metus. Ut luctus ut nulla vel blandit. Quisque accumsan mauris non rutrum fermentum. Phasellus non ornare ligula. Duis maximus vitae est ullamcorper condimentum. Sed consequat pulvinar turpis, sed condimentum nibh pretium in."
            	}
          		];

          let rlists = rlist.map(list => {

        		return <Answer key={list.id} title={list.title} text={list.text}/>
       		 })
		return(
			<section>
				{rlists}
			</section>
		);
	}
}