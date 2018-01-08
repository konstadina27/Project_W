import React from 'react';

export class AboutListing extends React.Component {
	render(){
		return(
		<div>
            <section>
                <h2>Reviews</h2>
                <div class="review">
                    <div class="image">
                        <div class="bg-transfer"><img src="assets/img/person-02.jpg" alt="" /></div>
                    </div>
                    <div class="description">
                        <figure>
                            <div class="rating-passive" data-rating="4">
                                <span class="stars"></span>
                                <span class="reviews">6</span>
                            </div>
                            <span class="date">09.05.2016</span>
                        </figure>
                        <p>Donec nec tristique sapien. Aliquam ante felis, sagittis sodales diam sollicitudin, dapibus semper turpis</p>
                    </div>
                </div>
                <div class="review">
                    <div class="image">
                        <div class="bg-transfer"><img src="assets/img/person-01.jpg" alt="" /></div>
                    </div>
                    <div class="description">
                        <figure>
                            <div class="rating-passive" data-rating="5">
                                <span class="stars"></span>
                                <span class="reviews">6</span>
                            </div>
                            <span class="date">09.05.2016</span>
                        </figure>
                        <p>Vestibulum vel est massa. Integer pellentesque non augue et accumsan. Maecenas molestie elit nibh,
                                    vel vestibulum leo condimentum quis. Duis ac orci a magna auctor vehicula.
                        </p>
                    </div>
                </div>
            </section>      
		</div>
		)
	}
}