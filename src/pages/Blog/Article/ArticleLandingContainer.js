import React from 'react';
import {Article} from './ArticleLanding';

export class ArticleContainer extends React.Component {
  render(){
    let ulist =[ 
          {  id:"1",
            hidden:"hidden",
            titleHidden:"hidden",
            img:"assets/img/items/20.jpg",
            title:"Vivamus porta orci eu turpis vulputate ornare fusce hendrerit arcu risu", 
            textHidden:"hidden",
            user:"Admin",
            date:"06/04/2014",
            tags: [ 
                { id:"1",name:"Photography" },
                { id:"2",name:"History" },
                { id:"3",name:"Literature" }
                ],
            text:"Fusce quis nulla volutpat, rhoncus ligula ut, pulvinar nisi. In dapibus urna sit amet accumsan tristique. Donec odio ligula, luctus venenatis varius id, tincidunt ac ipsum. Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis sapien vitae tristique mollis. Aliquam hendrerit nulla semper, viverra mi et, hendrerit mauris. Maecenas hendrerit congue ultrices. In laoreet erat blandit eros aliquet, in malesuada sem rutrum. In placerat porta egestas."
          },
          {  id:"2",
            titleHidden:"hidden",
            textHidden:"hidden",
            hidden:"hidden",
            title:"Nulla sapien leo, placerat sed lacinia nec, rutrum quis", 
            user:"Admin",
            date:"06/04/2014",
            tags: [ 
                { id:"1",name:"Interior" },
                { id:"2",name:"New Living" },
                ],
            text:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rutrum imperdiet ligula in bibendum. Aenean vulputate rutrum lobortis. Nullam non mi ac dui egestas venenatis. Etiam venenatis fermentum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacus sapien."
          },
          {  id:"3",
            title2:"SoundCloud Audio Post", 
            textHidden:"hidden",
            user:"Admin",
            date:"06/04/2014",
            tags: [ 
                { id:"1",name:"Audio" },
                { id:"2",name:"SoundCloud" },
                ],
            text:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec rutrum imperdiet ligula in bibendum. Aenean vulputate rutrum lobortis. Nullam non mi ac dui egestas venenatis. Etiam venenatis fermentum accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lacus sapien."
          },
          {  id:"4",
            titleHidden:"hidden",
            hidden:"hidden",
            title:"Cras commodo, velit nec aliquam dictum, tortor velit dictum ipsum, sed ornare nunc leo nec ipsum. Vestibulum sagittis sapien vitae tristique mollis.", 
            user:"Admin",
            date:"06/04/2014",
            tags: [ 
                { id:"1",name:"Interior" },
                { id:"2",name:"New Living" },
                ],
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet commodo mauris, sit amet commodo turpis. Duis consequat placerat lacus, in sagittis metus pretium vel. In luctus justo venenatis, accumsan justo sit amet, volutpat dolor. Pellentesque quis nulla nec nisi tempor scelerisque. Nam nec scelerisque sapien. Donec eleifend purus id neque pretium, at sollicitudin erat vestibulum. Donec ac tempus tellus, ac dignissim sapien. Fusce et elementum arcu. Maecenas sit amet tincidunt lorem.",
            text2:"Vivamus porta orci eu turpis vulputate ornare. Fusce hendrerit arcu risus, sed commodo lacus viverra in. Donec eget ligula in risus rutrum pretium id a elit. Nullam ut tristique arcu. Nam quis nunc ac eros accumsan tincidunt vel sit amet lorem. Sed euismod, turpis et facilisis vestibulum, leo lectus consectetur velit, sed lobortis ante dolor nec leo. Praesent congue tellus eu dui consectetur commodo. Sed quam ante, elementum sodales felis quis, rutrum tincidunt dolor. Etiam nec metus iaculis arcu cursus pulvinar. Nunc interdum eros a neque elementum lobortis. Nulla mattis quis risus vel molestie. Mauris id urna ac metus blandit lobortis in et odio."
          },
          ];
    
      let final = ulist.map(data => {
                  return <Article key={data.id} hidden={data.hidden} textHidden={data.textHidden} img={data.img} title2={data.title2}title={data.title} user={data.user} date={data.date} tags={data.tags} text={data.text} text2={data.text2}/> 
                      });
        
    return(
        <div>                  
          {final}
        </div>
      );

  }
}