import React from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export class AgentEditListingContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			editorServicesState: EditorState.createEmpty(),
			title:"",
			catTitle:"",
			category:"Category",
			venue:"",
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
			servicesTitle:"",
			servicesDesc:"",
			servicesVideo:"",
			servicesPrice:""
		}
	}
	onEditorServicesStateChange(editorCeremonyState){
	    this.setState({
	      editorCeremonyState,
	    });
  	};
	handleTitle(event){
		this.setState({
			title: event.target.value
		})
	}
	handlecatTitle(event){
		this.setState({
			catTitle: event.target.value
		})
	}
	handleCategory(event){
		this.setState({
			category: event.target.value
		})
	}
	handleVenue(event){
		this.setState({
			venue: event.target.value
		})
	}
	handleCost(event){
		this.setState({
			cost: event.target.value
		})
	}
	handleStartDate(event){
		this.setState({
			startDate: event.target.value
		})
	}
	handleLastDate(event){
		this.setState({
			lastDate: event.target.value
		})
	}
	handleAddress(event){
		this.setState({
			address: event.target.value
		})
	}
	handleRegion(event){
		this.setState({
			region: event.target.value
		})
	}
	handlePhone(event){
		this.setState({
			phone: event.target.value
		})
	}
	handleEmail(event){
		this.setState({
			email: event.target.value
		})
	}
	handleWebsite(event){
		this.setState({
			website: event.target.value
		})
	}
	handleVideo(event){
		this.setState({
			video: event.target.value
		})
	}
	handleChangeFacebook(event) {
        this.setState({
            facebook: event.target.value
        })
    }
    handleChangeTwitter(event) {
        this.setState({
            twitter: event.target.value
        })
    }
    handleChangePinterest(event) {
        this.setState({
            pinterest: event.target.value
        })
    }
    handleChangeYoutube(event) {
        this.setState({
            youtube: event.target.value
        })
    }
    handleChangeServicesTitle(event) {
        this.setState({
            servicesTitle: event.target.value
        })
    }
    handleChangeServicesDesc(event) {
        this.setState({
            servicesDesc: event.target.value
        })
    }
    handleServicesVideo(event) {
        this.setState({
            servicesVideo: event.target.value
        })
    }
  	handleChangeServicesPrice(event){
  		this.setState({
  			servicesPrice: event.target.value
  		})
  	}
    handleServicesSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
    handleSubmit(event) {
    	this.state.editorServicesState
		const rawService = JSON.stringify(convertToRaw(this.state.editorSErvicesState.getCurrentContent()))
		console.log(rawService)
        console.log(this.state);
        event.preventDefault();
      }
	render(){
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
			                                            value={this.state.title} onChange={this.handleTitle.bind(this)}/>
			                                        </div>
			                                    </div>
			                                </div>
			                               <div className="row">
			                               		<div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="title">New Category</label>
			                                            <input type="text" className="form-control" name="title" id="title" 
			                                            value={this.state.catTitle} onChange={this.handlecatTitle.bind(this)}/>
			                                        </div>
			                                    </div>
			                                    <div className="col-md-3 col-sm-3">
			                                        <div className="form-group">
			                                            <label htmlFor="category">Category</label>
			                                            <select className="form-control selectpicker" name="category" id="category" 
			                                            value={this.state.category} onChange={this.handleCategory.bind(this)}>
					                    					<option value="">Category</option>
					                        				<option value="Restaurant">Restaurant</option>
					                        				<option value="Event">Event</option>
					                       					<option value="Adrenaline">Adrenaline</option>
					                        				<option value="Sport">Sport</option>
					                        				<option value="Wellness">Wellness</option>
			                                            </select>
			                                        </div>
			                                    </div>
			                                    <div className="col-md-3 col-sm-3">
			                                    	<div className="form-group">
			                                            <label htmlFor="category">Venues</label>
			                                            <select className="form-control selectpicker" name="category" id="category" 
			                                            value={this.state.venue} onChange={this.handleVenue.bind(this)}>
					                    					<option value="">Venue</option>
					                        				<option value="Venue 1">Venue 1</option>
					                        				<option value="Venue 2">Venue 2</option>
					                       					<option value="Venue 3">Venue 3</option>
					                        				<option value="Venue 4">Venue 4</option>
					                        				<option value="Venue 5">Venue 5</option>
			                                            </select>
			                                        </div>
			                                    </div>
				                       		</div>
			                                <div className="row">
					                            <div className="col-md-3 col-sm-3">
					                     			<div className="form-group">
				                                        <label htmlFor="title">Minimun Cost </label>
				                                        <input type="text" className="form-control" name="title" id="title" 
				                                        value={this.state.cost} onChange={this.handleCost.bind(this)}/>
				                                    </div>
					                            </div>
				                           		<div className="col-md-5 col-sm-8">
					                                <div className="form-group">
					                                	<div className="col-md-12 col-sm-12">
					                               			<label htmlFor="tags">Availability</label>
					                               		</div>
					                                    <div className="col-md-6 col-sm-4">
                               								<input type="text" className="form-control date-picker" name="min-price" placeholder="From" 
                               								value={this.state.startDate} onChange={this.handleStartDate.bind(this)} />
                                						</div>
                                						<div className="col-md-6 col-sm-4">
                               								<input type="text" className="form-control date-picker" name="min-price" placeholder="Until" 
                               								value={this.state.lastDate} onChange={this.handleLastDate.bind(this)} />
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
			                                             value={this.state.address} onChange={this.handleAddress.bind(this)}/>
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
			                                            value={this.state.region} onChange={this.handleRegion.bind(this)}>
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
			                                            value={this.state.phone} onChange={this.handlePhone.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="email">Listing Email</label>
			                                            <input type="email" className="form-control" name="email" id="email" 
			                                            value={this.state.email} onChange={this.handleEmail.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="website">Listing Website</label>
			                                            <input type="text" className="form-control" name="website" id="website" 
			                                            value={this.state.website} onChange={this.handleWebsite.bind(this)} />
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
			                                    <input type="file" name="files[]" className="file-upload-input with-preview" multiple title="Click to add files" maxLength="10" accept="gif|jpg|png"/>
			                                    <span>Click or drag images here</span>
			                                </div>
			                                <div className="form-group">
			                                    <label htmlFor="video">Video URL</label>
			                                    <input type="text" className="form-control" name="video" id="video" placeholder="http://"
			                                     value={this.state.video} onChange={this.handleVideo.bind(this)}/>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Social</h3>
			                                <div className="row">
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="facebook">Facebook URL</label>
			                                            <input type="text" className="form-control" name="facebook" id="facebook" 
			                                             value={this.state.facebook} onChange={this.handleChangeFacebook.bind(this)} />
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="youtube">Youtube URL</label>
			                                            <input type="text" className="form-control" name="youtube" id="youtube" 
			                                            value={this.state.youtube} onChange={this.handleChangeYoutube.bind(this)}/>
			                                        </div>
			                                    </div>
			                                    <div className="col-md-6 col-sm-6">
			                                        <div className="form-group">
			                                            <label htmlFor="twitter">Twitter URL</label>
			                                            <input type="text" className="form-control" name="twitter" id="twitter" 
			                                            value={this.state.twitter} onChange={this.handleChangeTwitter.bind(this)}/>
			                                        </div>
			                                        <div className="form-group">
			                                            <label htmlFor="pinterest">Pinterest URL</label>
			                                            <input type="text" className="form-control" name="pinterest" id="pinterest" placeholder="http://"
			                                            value={this.state.pinterest} onChange={this.handleChangePinterest.bind(this)}/>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Services Package<span className="note">(optional)</span></h3>
			                                <div className="panel-group" id="accordion-4" role="tablist" aria-multiselectable="true">
			                                    <div className="panel panel-default">
			                                        <div className="panel-heading" role="tab" id="accordion-heading-4">
			                                            <h4 className="panel-title">
			                                                <a role="button" data-toggle="collapse" href="#accordion-collapse-4" data-parent="#accordion-4" aria-expanded="false" aria-controls="accordion-collapse-4">
			                                                    <i className="fa fa-cutlery"></i>Add Services package
			                                                </a>
			                                            </h4>
			                                        </div>
			                                        <div id="accordion-collapse-4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-4">
			                                            <div className="panel-body">
			                                                <div className="wrapper">
			                                                    <div className="row">
			                                                        <div className="col-md-8 col-sm-8">
			                                                            <div className="form-group">
			                                                            	<label htmlFor="video">Title</label>
			                                                                <input type="text" className="form-control" name="menu_title[]" placeholder="Title" 
			                                                                value={this.state.servicesTitle} onChange={this.handleChangeServicesTitle.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-4 col-sm-4">
			                                                            <div className="form-group">
			                                                            	<label htmlFor="video">Services Price</label>
			                                                                <input type="text" className="form-control" name="menu_title[]" 
			                                                                value={this.state.servicesPrice} onChange={this.handleChangeServicesPrice.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-12 col-sm-12">
			                                                            <div className="form-group">
			                                                           		<label htmlFor="video">Description</label>
			                                                                <div>
											                                    <Editor
																			       	editorServicesState={this.state.editorServicesState}
																			       	onEditorCeremonyStateChange={this.onEditorServicesStateChange.bind(this)}
																					wrapperClassName="wrapper-class"
																					editorClassName="editor-class"
																					toolbarClassName="toolbar-class"	
																				/>
																			</div>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-12 col-sm-12">
				                                                    	<div className="form-group">
										                                    <label htmlFor="video">Ceremony Video URL</label>
										                                    <input type="text" className="form-control" name="video" id="video" placeholder="http://"
										                                     value={this.state.servicesVideo} onChange={this.handleServicesVideo.bind(this)}/>
									                                	</div>
									                                </div>
									                                <div className="col-md-12 col-sm-12">
										                                <div className="file-uploaded-images">
																	        <div className="image">
																	            <figure><i className="fa fa-close"></i></figure>
																	            <img src="assets/img/items/1.jpg" alt="" />
																	        </div>
																	        <div className="image">
																	            <figure><i className="fa fa-close"></i></figure>
																	            <img src="assets/img/items/2.jpg" alt="" />
																	        </div>
																	    </div>
																	    <div className="file-upload-previews"></div>
																	    <div className="file-upload">
																	        <input type="file" name="files[]" className="file-upload-input with-preview"/>
																	        <span>Click or drag images here</span>
																	    </div>
																	</div>
			                                                    </div>
			                                                </div>
			                                                <div className="center"><button onSubmit={this.handleServicesSubmit.bind(this)}className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another meal</button></div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <hr/>
			                            <section className="center">
			                                <div className="form-group">
			                                    <button type="submit" className="btn btn-primary btn-rounded">Preview & Submit Listing</button>
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