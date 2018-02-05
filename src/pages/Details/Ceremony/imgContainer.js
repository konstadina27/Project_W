import React from 'react';

	export class ImageContainer extends React.Component{
	render(){
		let rlist =[  
                { id:"1",img:"assets/img/items/1.jpg",img2:"assets/img/person-01.jpg"},
                { id:"2",img:"assets/img/items/2.jpg",img2:"assets/img/person-02.jpg"},
                { id:"3",img:"assets/img/items/3.jpg",img2:"assets/img/person-02.jpg"}

          		];

          let rlists = rlist.map(list => {
          	
        		return <div className="col-lg-4" key={list.id}>
							<a href={list.img} data-lightbox="image" >
								<img src={list.img2} />
							</a>
						</div>
        	});
		return(
			<div>
				{rlists}
			</div>
		)
	}
}



