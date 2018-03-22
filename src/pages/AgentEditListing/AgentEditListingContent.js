import React from 'react';
import {ServicesPackage} from './ServicePackage';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import Select from 'react-select';
import { WithContext as ReactTags } from 'react-tag-input';
import '../../../node_modules/react-select-2/dist/css/react-select-2.css';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../../node_modules/react-tag-input/example/reactTags.css';

export class AgentEditListingContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			title:"",
			catTitle:"",
			category:[],
			files:[],
			tags: [{ id: 1, text: "Venue 1" }, { id: 2, text: "Venue 2" }],
            suggestions: ['Venue 1', 'Venue 2', 'Venue 3', 'Venue 4', 'Venue 5', 'Venue 6'],
			cost:"",
			startDate:"",
			lastDate:"",
			address:"",
			region:"",
			phone:"",
			email:"",
			website:"",
			video:"",
			facebook:"",
			youtube:"",
			twitter:"",
			pinterest:"",
			multi: true,
			multiValue: [],
			options: [
					{ value: 'R', label: 'Red' },
					{ value: 'G', label: 'Green' },
					{ value: 'B', label: 'Blue' }
			],
			value: undefined,
			service: [
			{id:1,editorState: EditorState.createEmpty(),servicesTitle:"",servicesVideo:"",servicesPrice:"",serviceFiles:"",collapseId:1}
			]				
		}
	}
	handleCategory(event){
		this.setState({
			category:[...event.target.selectedOptions].map(o => o.value)
		})
	}
  	//Tags 
	handleDelete(i) {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
 
    handleAddition(tag) {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }
 
    handleDrag(tag, currPos, newPos) {
        let tags = this.state.tags;
 
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        this.setState({ tags: tags });
    }
    //<Select />
	handleOnChange (value) {
		const multi  = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
		
	}
	onEditorStateChange(editorState){
		this.setState({
	      editorState,
	    });
  	};
    handleServiceSubmit(event) {
		let service = this.state.service
		service.push({
			id: (service.length + 1),
			servicesTitle: this.state.servicesTitle,
			servicesVideo: this.state.servicesVideo,
			servicesPrice: this.state.servicesPrice,
			serviceFiles:this.state.serviceFiles,
			editorState:this.state.editorState.getCurrentContent().getPlainText()
		})
		this.setState({
			service: service
		})
        event.preventDefault();
      }
	handleValueChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}
    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
	render(){
		const { multi, multiValue, options, value } = this.state;
		const { tags, suggestions } = this.state;
		const services = this.state.service.map((serv,i) => {
			if( this.state.service !== null){
			return <ServicesPackage key={i} handleServiceSubmit={this.handleServiceSubmit.bind(this)} editorState={this.state.editorState}
				handleValueChange={this.handleValueChange.bind(this)} onEditorStateChange={this.onEditorStateChange.bind(this)} id={serv.id}/>
			}
		});
		return(
			    <div id="page-content">
			        <div className="container">
			            <ol className="breadcrumb">
			                <li><a href="#">Home</a></li>
			                <li><a href="#">Pages</a></li>
			                <li className="active">Contact</li>
			            </ol>
			            <section className="page-title center">
			                <h1>Agent Edit Listing</h1>
			            </section>
			            <section>
                			<div className="row">
       							<div className="col-md-8 col-sm-8 col-md-offset-2 col-sm-offset-2">
			                        <form className="form inputs-underline" encType="multipart/form-data" onSubmit={this.handleSubmit.bind(this)}>
			                            <section>
			                                <h3>About</h3>
			                                <div className="row">
			                                    <div className="col-md-9 col-sm-9">
			                                        <div className="form-group">
			                                            <label htmlFor="title">Listing Title</label>
			                                            <input type="text" className="form-control" name="title" id="title" 
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                    </div>
			                                </div>
			                               <div className="row">
			                               		<div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="title">New Category</label>
			                                            <input type="text" className="form-control" name="catTitle" id="title" 
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                    </div>
			                                    <div className="col-md-3 col-sm-3">
			                                        <div className="form-group">
			                                            <label htmlFor="category">Category</label>
			                                            <select className="form-control selectpicker" name="category" id="category" multiple={true}
			                                             onChange={this.handleCategory.bind(this)}>
					                    					<option value="">Category</option>
					                        				<option value="Restaurant">Restaurant</option>
					                        				<option value="Event">Event</option>
					                       					<option value="Adrenaline">Adrenaline</option>
					                        				<option value="Sport">Sport</option>
					                        				<option value="Wellness">Wellness</option>
			                                            </select>
			                                        </div>
			                                    </div>

				                       		</div>
			                                <div className="row">
			                                	<div className="col-md-8 col-sm-5">
			                                		<div className="form-group">
			                                    		<label htmlFor="category">Venues</label>
			                                           	<ReactTags tags={tags}
										                    suggestions={suggestions}
										                    handleDelete={this.handleDelete.bind(this)}
										                    handleAddition={this.handleAddition.bind(this)}
										                    handleDrag={this.handleDrag.bind(this)} />
										            </div>
			                                    </div>
			                                </div>
			                               	<div className="row">
					                            <div className="col-md-3 col-sm-3">
					                     			<div className="form-group">
				                                        <label htmlFor="title">Minimun Cost </label>
				                                        <input type="text" className="form-control" name="cost" id="title" 
				                                        onChange={this.handleValueChange.bind(this)}/>
				                                    </div>
					                            </div>
				                           		<div className="col-md-4 col-sm-5">
					                                <div className="form-group">
					                                	<div className="col-md-12 col-sm-12">
					                               			<label htmlFor="tags">Availability</label>
					                               		</div>
					                                    <div className="col-md-6 col-sm-4">
                               								<input type="text" className="form-control date-picker" name="startDate" placeholder="From" 
                               								onChange={this.handleValueChange.bind(this)} />
                                						</div>
                                						<div className="col-md-6 col-sm-4">
                               								<input type="text" className="form-control date-picker" name="lastDate" placeholder="Until" 
                               								onChange={this.handleValueChange.bind(this)} />
                                						</div>
					                                </div>
				                                </div>
				                            </div>
			                            </section>
			                            <section>
			                                <h3>Contact</h3>
			                                <div className="row">
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="address-autocomplete">Address</label>
			                                            <input type="text" className="form-control" name="address" id="address-autocomplete"
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                            <div className="map height-200px shadow" id="map-submit"></div>
			                                        <div className="form-group hidden">
			                                            <input type="text" className="form-control" id="latitude" name="latitude" hidden=""/>
			                                            <input type="text" className="form-control" id="longitude" name="longitude" hidden=""/>
			                                        </div>
			                                        <p className="note">Enter the exact address or drag the map marker to position</p>
			                                    </div>
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="region">Listing Region</label>
			                                            <select className="form-control selectpicker" name="region" id="region" 
			                                            onChange={this.handleValueChange.bind(this)}>
		                    									<option value="">Region</option>
		                        								<option value="London">London</option>
		                        								<option value="New York">New York</option>
		                        								<option value="Washington">Washington</option>
		                        								<option value="Paris">Paris</option>
			                                            </select>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="phone">Listing Phone</label>
			                                            <input type="text" className="form-control" name="phone" id="phone"  
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="email">Listing Email</label>
			                                            <input type="email" className="form-control" name="email" id="email" 
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="website">Listing Website</label>
			                                            <input type="text" className="form-control" name="website" id="website" 
			                                            onChange={this.handleValueChange.bind(this)} />
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Gallery</h3>
			                                <div className="file-uploaded-images">
			                                    <div className="image">
			                                        <figure><i className="fa fa-close"></i></figure>
			                                        <img src="assets/img/items/1.jpg" alt=""/>
			                                    </div>
			                                    <div className="image">
			                                        <figure><i className="fa fa-close"></i></figure>
			                                        <img src="assets/img/items/2.jpg" alt=""/>
			                                    </div>
			                                    <div className="image">
			                                        <figure><i className="fa fa-close"></i></figure>
			                                        <img src="assets/img/items/4.jpg" alt=""/>
			                                    </div>
			                                </div>
			                                <div className="file-upload-previews"></div>
			                                <div className="file-upload">
			                                    <input type="file" name="files" className="file-upload-input with-preview" multiple
			                                    onChange={this.handleValueChange.bind(this)}/>
			                                    <span>Click or drag images here</span>
			                                </div>
			                                <div className="form-group">
			                                    <label htmlFor="video">Video URL</label>
			                                    <input type="text" className="form-control" name="video" id="video" placeholder="http://"
			                                    onChange={this.handleValueChange.bind(this)}/>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Social</h3>
			                                <div className="row">
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="facebook">Facebook URL</label>
			                                            <input type="text" className="form-control" name="facebook" id="facebook" 
			                                            onChange={this.handleValueChange.bind(this)} />
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="youtube">Youtube URL</label>
			                                            <input type="text" className="form-control" name="youtube" id="youtube" 
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                    </div>
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="twitter">Twitter URL</label>
			                                            <input type="text" className="form-control" name="twitter" id="twitter" 
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="pinterest">Pinterest URL</label>
			                                            <input type="text" className="form-control" name="pinterest" id="pinterest" placeholder="http://"
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                    </div>
			                                </div>
			 							</section>
										<section>
											{services}	
 												<div className="center"><button onClick={this.handleServiceSubmit.bind(this)} className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another service</button></div>
										</section>								
										<div className="section">
											<Select.Creatable
											name="multiSelect"
												multi={multi}
												options={options}
												onChange={this.handleOnChange.bind(this)}
												value={this.state.multi ? multiValue : value}
												name="multi"
											/>
											<div className="hint">{this.props.hint}</div>
										</div>
			                            <hr/>
			                            <section className="center">
			                                <div className="form-group">
			                                    <button  type="submit" className="btn btn-primary btn-rounded">Preview & Submit Listing</button>
			                                </div>
			                            </section>
			                        </form>
       							</div>
                			</div>
                		</section>
			        </div>
			    </div>
		);
	}
}