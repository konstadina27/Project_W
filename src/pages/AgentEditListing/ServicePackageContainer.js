import React from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import {ServicesPackageContent} from './ServicePackage'

export class ServicesPackage extends React.Component {
	constructor(props){
		super(props);
		this.state={
			service: [
			{id:0, editorState:EditorState.createEmpty(),servicesTitle:"",servicesVideo:"",servicesPrice:"",serviceFiles:""}
			]
		}
	}
	onEditorStateChange(editorState){
		this.setState({
	      editorState,
	    });
  	};
  	handleServiceValueChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}
    handleServiceSubmit(event) {
		let service = this.state.service
		
		service.push({
			id: (service.length + 1) - 1,
			servicesTitle: this.state.servicesTitle,
			servicesVideo: this.state.servicesVideo,
			servicesPrice: this.state.servicesPrice,
			serviceFiles:this.state.serviceFiles,
			
		})
		this.setState({
			service: service
		})
        console.log(service);
        event.preventDefault();
      }
	render(){
		return(
			<ServicesPackageContent handleServiceSubmit={this.handleServiceSubmit.bind(this)} editorState={this.state.editorState}
			 handleServiceValueChange={this.handleServiceValueChange.bind(this)} onEditorStateChange={this.onEditorStateChange.bind(this)}/>
		)
	}
}
