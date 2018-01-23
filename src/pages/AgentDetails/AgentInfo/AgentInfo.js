import React from 'react';

export class AgentInfo extends React.Component {
	render(){
		return(
	    <section>
		    <div className="subject-detail">
		        <div className="image">
		            <div className="bg-transfer">
		                <img src="assets/img/person-01-big.jpg" alt="" />
		            </div>
		        </div>
		        <div className="description">
		            <section className="name">
		                <h3>Jane Doe</h3>
		                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis aliquam finibus. Nullam at ante et nulla vehicula euismod ut eget urna.</p>
		            </section>
		            <section className="contacts">
		                <figure><i className="fa fa-phone"></i>(123) 456 789</figure>
		                <figure><a href="#"><i className="fa fa-envelope"></i>jane.doe@example.com</a></figure>
		            </section>
		            <section className="social">
		                <a href="#"><i className="social_twitter"></i></a>
		                <a href="#"><i className="social_facebook"></i></a>
		                <a href="#"><i className="social_youtube"></i></a>
		            </section>
		        </div>
		    </div>
		</section>
		)
	}
}

	            