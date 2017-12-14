import React from 'react';
import { BlogSection }from './BlogSectionLanding';

export class BlogSectionContainer extends React.Component {
    render(){
        let blogList =[  
                { id:"1",title:"Lorem ipsum dolor sit amet",date:"21.06.2015",text:"Ut nec vulputate enim. Nulla faucibus convallis dui. Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus"},
                { id:"2",title:"Sed et justo ut nibh condimentum lacinia",date:"13.06.2015",text:"Donec arcu enim, scelerisque gravida lacus vel, dignissim cursus lectus. Aliquam laoreet purus in iaculis sodales." },
                { id:"3",title:"Suspendisse varius eros id enim",date:"03.04.2015",text:"Nullam nec turpis blandit, sodales risus vitae, tincidunt velit. Vestibulum ac ipsum tincidunt, vestibulum leo eget,"},
                ];

                 let blogLists = blogList.map(list => {

                    return  <BlogSectionContainer title={list.title} date={list.date} text={list.text} key={list.id}/>

                });
        return(
            <section className="block">
                <div className="container">
                    <div className="section-title">
                        <h2>From the Blog</h2>
                    </div>
                    <div className="row">
                        {blogLists}
                    </div>
                </div>
            </section>
        );
    }
}