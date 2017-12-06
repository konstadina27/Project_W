import React from 'react';
import { BlogSectionContainer }from './BlogSectionLaddingContainer';

export class BlogSection extends React.Component {
    render(){
        return(
            <section className="block">
                <div className="container">
                    <div className="section-title">
                        <h2>From the Blog</h2>
                    </div>
                    <div className="row">
                        <BlogSectionContainer title="Lorem ipsum dolor sit amet" date="21.06.2015" text="Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus"/>
                        <BlogSectionContainer title="Sed et justo ut nibh condimentum lacinia" date="13.06.2015" text="Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales."/>
                        <BlogSectionContainer title="Suspendisse varius eros id enim" date="03.04.2015" text="Nullam nec turpis blandit, sodales risus vitae, tincidunt velit. Vestibulum ac ipsum tincidunt, vestibulum leo eget,"/>
                    </div>
                </div>
            </section>
        );
    }
}