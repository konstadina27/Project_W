import React from 'react';

export class CarouselContainer extends React.Component {
	render(){
		return(
				<section>
		            <div className="gallery detail">
		                <div className="owl-carousel" data-owl-items="3" data-owl-loop="1" data-owl-auto-width="1" data-owl-nav="1" data-owl-dots="0" data-owl-margin="2" data-owl-nav-container="#gallery-nav">
		                    <div className="image">
		                        <div className="bg-transfer"><img src="assets/img/items/4.jpg" alt="" /></div>
		                    </div>
		                    <div className="image">
		                        <div className="bg-transfer"><img src="assets/img/items/4.jpg" alt="" /></div>
		                    </div>
		                    <div className="image">
		                        <div className="bg-transfer"><img src="assets/img/items/4.jpg" alt="" /></div>
		                    </div>
		                    <div className="image">
		                        <div className="bg-transfer"><img src="assets/img/items/4.jpg" alt="" /></div>
		                    </div>
		                    <div className="image">
		                        <div className="bg-transfer"><img src="assets/img/items/4.jpg" alt="" /></div>
		                    </div>
		                </div>
		            </div>
		        </section>
		)
	}
}