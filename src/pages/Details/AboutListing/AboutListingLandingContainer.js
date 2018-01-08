import React from 'react';
import {AboutListing} from './AboutListingLanding';

export class AboutListingContainer extends React.Component {
	render(){
		return(
		<div>
            <AboutListing title="About this listing" 
            			  mainT= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur tristique enim, ac tincidunt
                                                massa pulvinar non. Donec scelerisque libero eu tincidunt cursus. Phasellus vel commodo nunc, nec suscipit
                                                enim. Integer suscipit, mauris consectetur pharetra ultrices, neque sem malesuada mauris, id tristique
                                                ante leo vel magna. Phasellus ac risus vel erat elementum fringilla et non massa. Pellentesque habitant
                                                morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                          secT="In ut varius magna. Integer ullamcorper tincidunt molestie. Morbi consequat sem non nulla laoreet,
                                                non commodo tellus elementum. Sed tincidunt, lorem vitae rhoncus pharetra, diam ex pharetra erat, eu
                                                lacinia mi libero vitae lectus. Nullam cursus bibendum magna ut elementum. Fusce eget mauris in erat
                                                gravida pretium sed eget massa.
                                                gravida pretium sed eget massa."
              />
		</div>
		)
	}
}