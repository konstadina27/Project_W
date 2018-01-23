import React from 'react';

export class LicenceCont extends React.Component {
	render(){
		return(
	    <div>
            <section>
 				<h2>License</h2>
              	<p>Unless otherwise stated, Listing Portal and/or it’s licensors own the intellectual property rights for all material on Listing Portal All intellectual property rights are reserved. You may view and/or print pages from http://www.example.com for your own personal use subject to restrictions set in these terms and conditions.</p>
                <p>You must not:</p>
        	    <ul className="bullets">
                    <li>Republish material from http://www.example.com</li>
                    <li>Sell, rent or sub-license material from http://www.example.com</li>
                    <li>Reproduce, duplicate or copy material from http://www.example.com</li>
                </ul>
                <p>Redistribute content from Listing Portal (unless content is specifically made for redistribution).</p>
      	    </section>
	    </div>
		)
	}
}