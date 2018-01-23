import React from 'react';
import { SearchFormContent } from '../../../components/Search/SearchFormLanding';
import { RecentSectionContainer } from '../../../components/RecentSection/RecentSectionLandingContainer';
import { SortSectionContent } from '../SortSection/SortSectionLanding';
import { RowlistingContainer } from '../Rowlisting/RowlistingLandingContainer';

export class SideBarContent extends React.Component {
	render(){
		return(
            <div className="row">
                <div className="col-md-3 col-sm-3">
                    <aside className="sidebar">
                        <section>
                            <h2>Search Filter</h2>
                    	    <SearchFormContent />
                        </section>
                        <section>
                            <h2>Recent Items</h2>
                    	   <RecentSectionContainer />
                        </section>
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