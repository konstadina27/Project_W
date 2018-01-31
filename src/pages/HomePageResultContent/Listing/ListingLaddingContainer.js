import React from 'react';

export class ListingsContainer extends React.Component {
  render(){
    const faType = "fa fa-paint-brush" ||"fa fa-suitcase" || "fa fa-desktop" || "fa fa-graduation-cap" || "fa fa-television" || "fa fa-university" || "fa fa-heart" || "fa fa-newspaper-o"
    let ulist =[ {  id:"0",
            title:"Arts & Humanities", 
            content: [ 
                { id:"1",name:"Photography",count:"3" },
                { id:"2",name:"History",count:"2" },
                { id:"3",name:"Literature",count:"4" }
                ]
          },
          {
            id:"1",
            title:"Business & Economy", 
            content: [ 
                { id:"1",name:"Business to Business",count:"6" },
                { id:"2",name:"Finance",count:"4" },
                { id:"3",name:"Shopping",count:"3" },
                { id:"4",name:"Jobs",count:"5" }
                ]
          },
          {
            id:"2",
            title:" Computer & Internet", 
            content: [ 
                { id:"1",name:"Hardware",count:"10" },
                { id:"2",name:"Software",count:"4" },
                { id:"3",name:"Websites",count:"6" },
                { id:"4",name:"Games",count:"7" }
                ]
          },
          {
            id:"3",
            title:"Education", 
            content: [ 
                { id:"1",name:"Colleges",count:"8" },
                { id:"2",name:"K-12",count:"7" },
                { id:"3",name:"Distance Learning",count:"2" },
                ]
          },
          {
            id:"4",
            title:"Entertainment", 
            content: [ 
                { id:"1",name:"Movies",count:"6" },
                { id:"2",name:"TV Shows",count:"9" },
                { id:"3",name:"Music",count:"1" },
                { id:"4",name:"Humor",count:"4" }
                ]
          },
          {
            id:"5",
            title:" Government", 
            content: [ 
                { id:"1",name:"Elections",count:"3" },
                { id:"2",name:"Military",count:"2" },
                { id:"3",name:"Law",count:"6" },
                { id:"4",name:"Taxes",count:"7" }
                ]
          },
          {
            id:"6",
            title:"Health", 
            content: [ 
                { id:"1",name:"Disease",count:"1" },
                { id:"2",name:"Drugs",count:"5" },
                { id:"3",name:"Fitness",count:"4" },
                { id:"4",name:"Nutrition",count:"8" }
                ]
          },
          {
            id:"7",
            title:"News & Media", 
            content: [ 
                { id:"1",name:"News & Media",count:"5" },
                { id:"2",name:"Radio",count:"9" },
                { id:"3",name:"Weather",count:"3" },
                { id:"4",name:"Blogs",count:"4" }
                ]
          },
          ];
    
      let final = ulist.map(data => {
        if (data.id === this.props.listTitleNum){
                let list = data.content.map(lidata =>{
                     return <li key={lidata.id}> <a href="#"> {lidata.name}</a><figure className="count">{lidata.count}</figure></li>
                     });
                  return <div className="list-item" key={data.id}> 
                        <div className="title"> 
                          <div className="icon"><i className={this.props.faType}></i></div> 
                          <h3><a href="#">{data.title}</a></h3> 
                        </div>
                        <ul>{list}</ul>
                      </div>;
                      }});
        
    return(
              <div className="col-md-3 col-sm-3">
                 <div className="list-item">                     
            {final}
                 </div>
              </div>
      );

  }
}