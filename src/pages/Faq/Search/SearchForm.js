import React from 'react';
 
export class SearchForm extends React.Component {
	constructor(props){
		super(props);
		this.state={
			text:""
		}
	}
	handleChangeText(event){
		this.setState({
			text: event.target.value
		})
	}
	handleKeyPress(event) {
		if(event.key === 'Enter'){
        console.log(this.state);
        event.preventDefault();
       	}
      }
	render(){
		return(
            <section>
                <div className="row">
                    <div className="col-md-8 col-sm-8">
                        <form className="form inputs-underline" onKeyPress={this.handleKeyPress.bind(this)}>
                            <h3>Search in Answers</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter your search" 
                                value={this.state.text} onChange={this.handleChangeText.bind(this)}/>
                            </div>
                        </form>
              	    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="featured-contact">
                            <i className="icon_comment_alt"></i>
                            <h4>Didn’t find an answer?<br />Call our support</h4>
                            <h3>228-341-8068</h3>
                        </div>
                    </div>
                </div>
            </section>
		);
	}
}