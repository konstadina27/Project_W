import React from 'react';
import { SearchFormContent } from '../Search/SearchFormLadding';
import { RecentSectionContainer } from '../RecentSection/RecentSectionLandingContainer';
import { SortSectionContent } from '../SortSection/SortSectionLadding';
import { RowlistingContainer } from '../Rowlisting/RowlistingLandingContainer';


export class SideBarContent extends React.Component {
	render(){
		return(
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <aside className="sidebar">
                    	<SearchFormContent />
                    	<RecentSectionContainer />
                    </aside>
                </div>
                <div className="col-md-9 col-sm-9">
                        <section className="page-title">
                            <h1>Row Listing</h1>
                        </section>
                        <SortSectionContent />
                        <RowlistingContainer />
                    </div>
            </div>
		);
	}
}