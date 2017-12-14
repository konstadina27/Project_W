import React from 'react';
import { InfoIncludedSectionContainer,InfoSectionContainer } from './InfoSectionLanding'

export class InfoSection extends React.Component {
	render(){
		let infoText = "Suspendisse gravida bibendum vestibulum. Curabitur sit amet tempus velit, ultricies hendrerit metus." +
                    "Proin consequat sem in neque sollicitudin euismod. Nunc vulputate facilisis urna, quis consectetur nisl" +
                    "congue nec. Etiam tristique egestas purus, id efficitur purus tempus eget. Mauris lobortis finibus" +
                   "diam, non tempus augue scelerisque et. Integer ultrices, magna at tincidunt iaculis, massa neque" +
                   " pellentesque eros, non efficitur est libero nec dui."
		return(
			<section>
                <div className="row">
                	<InfoIncludedSectionContainer Title="What Is Included" subTitle="Check what you’ll get after registration"/>
                	<InfoSectionContainer Title="Why Choose Us?" subTitle="What you will get" text={infoText}/>
                </div>
            </section>
			);
	}
}