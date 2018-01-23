import React from 'react';
import {Review} from './ReviewLanding';

export class ReviewContainer extends React.Component {
	render(){
		let rlist =[  
                {
                 id:"1",reviewClass:"review",ribbonClass:"ribbon right new",ribbonText:"New",name:"John Doe",date:"10.03.2015",rating:"9.5",title:"Beautiful Holiday",
                text:"Consectetur adipiscing elit. Vivamus nec augue ac dui sodales euismod.Suspendisse at dui sit amet felis commodo dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer commodo eleifend erat, vitae tincidunt urna volutpat et. Mauris laoreet, sem ut sodales sodales, massa turpis posuere lectus, non aliquet massa nisl ac orci.",
            	collapse:"collapse in",clean:"10",comfort:"9",location:"8",facilities:"10",staff:"8",value:"9",formId:"form_reply_1",replyLink:"#reply_1",replyId:"reply_1"
            	},
                {
                 id:"2",reviewClass:"review muted",ribbonClass:"ribbon right new white",check:"fa fa-check",ribbonText:"Answerded",name:"Peter Green",date:"08.03.2015",rating:"9.8",title:"Very Good Hotel",
                text:"Sed facilisis mi turpis, sed suscipit risus consequat sed. Donec cursus feugiat nulla sit amet viverra. Nulla sit amet condimentum mi, et suscipit justo. Pellentesque maximus lectus sit amet rutrum vulputate. Vivamus neque tortor, rutrum eu consectetur eget, posuere eu eros. Aenean fringilla vel libero eu mollis. Phasellus vitae ultricies mauris. In vel est interdum, dictum mi eget, fermentum nibh. Quisque vitae porttitor massa. Proin non diam tincidunt, consectetur tortor eget, consequat diam. Praesent dictum odio lorem, nec imperdiet turpis vestibulum ac.",
            	collapse:"collapse",clean:"10",comfort:"9",location:"8",facilities:"10",staff:"8",value:"9",formId:"form_reply_2",replyLink:"#reply_2",replyId:"reply_2"
            	},
            	{
                 id:"3",reviewClass:"review",name:"Suzanne Broke",date:"01.03.2015",rating:"9.2",title:"Nice Stay!",
                text:"Maecenas porta velit nec semper rutrum. Vestibulum ac lorem imperdiet metus ullamcorper porttitor. In quis iaculis dui. Sed lorem dui, scelerisque sodales feugiat aliquet, finibus et magna. Aenean sit amet tincidunt nunc. Vestibulum commodo at nisi ut pellentesque.",
            	collapse:"collapse",clean:"10",comfort:"9",location:"8",facilities:"10",staff:"8",value:"9",formId:"form_reply_3",replyLink:"#reply_3",replyId:"reply_3"
            	}
          		];

          let rlists = rlist.map(list => {

        		return <Review key={list.id} reviewClass={list.reviewClass} ribbonClass={list.ribbonClass} check={list.check} 
        		ribbonText={list.ribbonText} name={list.name} date={list.date} 
        		rating={list.rating} title={list.title} text={list.text} collapse={list.collapse} clean={list.clean} 
        		comfort={list.comfort} location={list.location} facilities={list.facilities} staff={list.staff} value={list.value} 
        		formId={list.replyId} replyId={list.replyId} replyLink={list.replyLink}/>
       		 })
		return(
			<section>
				{rlists}
			</section>
		);
	}
}