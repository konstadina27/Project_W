import React from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export class EditListingContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			editorState: EditorState.createEmpty(),
			editorMusicState: EditorState.createEmpty(),
			editorCeremonyState: EditorState.createEmpty(),
			title:"",
			catTitle:"",
			category:"Category",
			description:"",
			tags:"",
			cost:"",
			hosting:"",
			startDate:"",
			lastDate:"",
			equip:"",
			extraCost:"",
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
			menuTitle:"",
			menuDesc:"",
			menuType:"",
			menuVideo:"",
			ceremonyTitle:"",
			ceremonyDesc:"",
			ceremonyVideo:"",
			scheduleDate:"",
			time:"",
			place:"",
			scheduleAddress:"",
			monOpen:"",
			monClose:"",
			tueOpen:"",
			tueClose:"",
			wedOpen:"",
			wedClose:"",
			thuOpen:"",
			thuClose:"",
			friOpen:"",
			friClose:"",
			satOpen:"",
			satClose:"",
			sunOpen:"",
			sunClose:"",

		}
	}
	onEditorStateChange(editorState){
	    this.setState({
	      editorState,
	    });
  	};
	onEditorMusicStateChange(editorMusicState){
	    this.setState({
	      editorMusicState,
	    });
  	};
	onEditorCeremonyStateChange(editorCeremonyState){
	    this.setState({
	      editorCeremonyState,
	    });
  	};
	handleOpenHours(event){
		this.setState({
			[event.target.name]: event.target.value 
		})
	}
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
	handleDesc(event){
		this.setState({
			description: event.target.value
		})
	}
	handleTags(event){
		this.setState({
			tags: event.target.value
		})
	}
	handleCost(event){
		this.setState({
			cost: event.target.value
		})
	}
	handleHosting(event){
		this.setState({
			hosting: event.target.value
		})
	}
	handleEquip(event){
		this.setState({
			equip: event.target.value
		})
	}
	handleExtraCost(event){
		this.setState({
			extraCost: event.target.value
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
    handleChangeMenuTilte(event) {
        this.setState({
            menuTitle: event.target.value
        })
    }
    handleChangeMenuDesc(event) {
        this.setState({
            menuDesc: event.target.value
        })
    }
    handleChangeMenuType(event) {
        this.setState({
            menuType: event.target.value
        })
    }
    handleMenuVideo(event) {
        this.setState({
            menuVideo: event.target.value
        })
    }
    handleChangeCeremonyTilte(event) {
        this.setState({
            menuTitle: event.target.value
        })
    }
    handleChangeCeremonyDesc(event) {
        this.setState({
            menuDesc: event.target.value
        })
    }
    handleCeremonyVideo(event) {
        this.setState({
            menuVideo: event.target.value
        })
    }
    handleChangeScheduleDate(event) {
        this.setState({
            scheduleDate: event.target.value
        })
    }
    handleChangeTime(event) {
        this.setState({
            time: event.target.value
        })
    }
    handleChangePlace(event) {
        this.setState({
            place: event.target.value
        })
    }
    handleChangeScheduleAddress(event) {
        this.setState({
            schedule_address: event.target.value
        })
    }
    handleMenuSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
    handleSubmit(event) {
    	this.state.editorState
    	this.state.editorMusicState
    	this.state.editorCeremonyState
		const raw = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
		console.log(raw)
		const rawMusic = JSON.stringify(convertToRaw(this.state.editorMusicState.getCurrentContent()))
		console.log(rawMusic)
		const rawCeremony = JSON.stringify(convertToRaw(this.state.editorCeremonyState.getCurrentContent()))
		console.log(rawCeremony)
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
			                <h1>Edit Listing</h1>
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
			                               		<div className="col-md-9 col-sm-9">
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
			                              
			                                <div className="col-md-12 col-sm-9">
				                                <div className="form-group">
				                                    <label htmlFor="description">Description</label>
				                                    <div>
				                                     <Editor
												       	editorState={this.state.editorState}
												       	onEditorStateChange={this.onEditorStateChange.bind(this)}
														wrapperClassName="wrapper-class"
														editorClassName="editor-class"
														toolbarClassName="toolbar-class"	
													/>
													</div>
				                                </div>
				                            </div> 
				                       	</div>
			                                <div className="row">
				                                <div className="col-md-9 col-sm-9">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Tags</label>
					                                    <input type="text" className="form-control" name="tags" id="tags" value={this.state.tags} onChange={this.handleTags.bind(this)}  />
					                                </div>
					                            </div>
					                            <div className="col-md-3 col-sm-3">
					                     			<div className="form-group">
				                                        <label htmlFor="title">Cost Per Person</label>
				                                        <input type="text" className="form-control" name="title" id="title" 
				                                        value={this.state.cost} onChange={this.handleCost.bind(this)}/>
				                                    </div>
					                            </div>
					                            <div className="col-md-4 col-sm-4">
				                                   <div className="form-group">
				                                        <label htmlFor="category">Hosting</label>
				                                        <select className="form-control selectpicker" name="category" id="category" 
				                                        value={this.state.hosting} onChange={this.handleHosting.bind(this)}>
				                                        	<option value="">Hosting</option>
						                    				<option value="reception">Reception</option>
						                        			<option value="ceremony">Ceremony</option>
						                        			<option value="reception-ceremony">Reception & Ceremony</option>
				                                        </select>
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
				                            	<div className="col-md-3 col-sm-3">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Extra Cost/Equipment</label>
					                                    <input type="text" className="form-control" name="tags" id="tags" value={this.state.extraCost} onChange={this.handleExtraCost.bind(this)}  />
					                                </div>
				                                </div>
				                                <div className="col-md-12 col-sm-9">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Music Equipment</label>
					                                    <div>
						                                    <Editor
														       	editorMusicState={this.state.editorMusicState}
														       	onEditorMusicStateChange={this.onEditorMusicStateChange.bind(this)}
																wrapperClassName="wrapper-class"
																editorClassName="editor-class"
																toolbarClassName="toolbar-class"	
															/>
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
			                                <h3>Opening Hours<span className="note">(optional)</span></h3>
			                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
			                                    <div className="panel panel-default">
			                                        <div className="panel-heading" role="tab" id="accordion-heading-1">
			                                            <h4 className="panel-title">
			                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#accordion-collapse-1" aria-expanded="false" aria-controls="accordion-collapse-1">
			                                                    <i className="fa fa-clock-o"></i>Add opening hours
			                                                </a>
			                                            </h4>
			                                        </div>
			                                        <div id="accordion-collapse-1" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="accordion-heading-1">
			                                            <div className="panel-body">
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Monday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="monOpen" 
			                                                            value={this.state.monOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="monClose"  
			                                                            value={this.state.monClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Tuesday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="tueOpen" 
			                                                            value={this.state.tueOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="tueClose"
			                                                            value={this.state.tueClose} onChange={this.handleOpenHours.bind(this)} />
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Wednesday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="wedOpen" 
			                                                            value={this.state.wedOpen} onChange={this.handleOpenHours.bind(this)} />
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="wedClose"
			                                                            value={this.state.wedClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Thursday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="thuOpen" 
			                                                            value={this.state.thuOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="thuClose" 
			                                                            value={this.state.thuClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Friday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="friOpen" 
			                                                            value={this.state.friOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="friClose"
			                                                            value={this.state.friClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Saturday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="satOpen" 
			                                                            value={this.state.satOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="satClose" 
			                                                            value={this.state.satClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="row">
			                                                    <div className="col-md-4 col-sm-4 horizontal-input-title">
			                                                        <strong>Sunday</strong>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="sunOpen" 
			                                                            value={this.state.sunOpen} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="sunClose" 
			                                                            value={this.state.sunClose} onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Restaurant Menu<span className="note">(optional)</span></h3>
			                                <div className="panel-group" id="accordion-2" role="tablist" aria-multiselectable="true">
			                                    <div className="panel panel-default">
			                                        <div className="panel-heading" role="tab" id="accordion-heading-2">
			                                            <h4 className="panel-title">
			                                                <a role="button" data-toggle="collapse" href="#accordion-collapse-2" data-parent="#accordion-2" aria-expanded="false" aria-controls="accordion-collapse-2">
			                                                    <i className="fa fa-cutlery"></i>Add restaurant menu
			                                                </a>
			                                            </h4>
			                                        </div>
			                                        <div id="accordion-collapse-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-2">
			                                            <div className="panel-body">
			                                                <div className="wrapper">
			                                                    <div className="row">
			                                                        <div className="col-md-3 col-sm-3"><strong>Title </strong><span className="note">(Optional)</span></div>
			                                                        <div className="col-md-6 col-sm-6"><strong>Description</strong></div>
			                                                        <div className="col-md-3 col-sm-3"><strong>Meal Type</strong></div>
			                                                    </div>
			                                                    <div className="row">
			                                                        <div className="col-md-3 col-sm-3">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="menu_title[]" placeholder="Title" 
			                                                                value={this.state.menuTitle} onChange={this.handleChangeMenuTilte.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-6 col-sm-6">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="menu_description[]" placeholder="Description"
			                                                                value={this.state.menuDesc} onChange={this.handleChangeMenuDesc.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-3 col-sm-3">
			                                                            <div className="form-group">
			                                                                <select className="form-control selectpicker" name="menu_type[]"
			                                                                value={this.state.menuType} onChange={this.handleChangeMenuType.bind(this)}>
			                                                                    <option value="">Select meal type</option>
			                                                                    <option value="starter">Starter</option>
			                                                                    <option value="soup">Soup</option>
			                                                                    <option value="main-course">Main Course</option>
			                                                                    <option value="desert">Desert</option>
			                                                                </select>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-12 col-sm-12">
				                                                    	<div className="form-group">
										                                    <label htmlFor="video">Menu Video URL</label>
										                                    <input type="text" className="form-control" name="video" id="video" placeholder="http://"
										                                     value={this.state.menuVideo} onChange={this.handleMenuVideo.bind(this)}/>
									                                	</div>
									                                </div>
			                                                    </div>
			                                                </div>
			                                                <div className="center"><button onSubmit={this.handleMenuSubmit.bind(this)}className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another meal</button></div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Schedule<span className="note">(optional)</span></h3>
			                                <div className="panel-group" id="accordion-3" role="tablist" aria-multiselectable="true">
			                                    <div className="panel panel-default">
			                                        <div className="panel-heading" role="tab" id="accordion-heading-3">
			                                            <h4 className="panel-title">
			                                                <a role="button" data-toggle="collapse" data-parent="#accordion-3" href="#accordion-collapse-3" aria-expanded="false" aria-controls="accordion-collapse-3">
			                                                    <i className="fa fa-calendar"></i>Add schedule plan
			                                                </a>
			                                            </h4>
			                                        </div>
			                                        <div id="accordion-collapse-3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-3">
			                                            <div className="panel-body">
			                                                <div className="wrapper">
			                                                    <div className="row">
			                                                        <div className="col-md-2 col-sm-3">
			                                                            <strong>Date</strong>
			                                                        </div>
			                                                        <div className="col-md-2 col-sm-3">
			                                                            <strong>Time</strong>
			                                                        </div>
			                                                        <div className="col-md-4 col-sm-3">
			                                                            <strong>Place</strong>
			                                                        </div>
			                                                        <div className="col-md-4 col-sm-3">
			                                                            <strong>Address</strong>
			                                                        </div>
			                                                    </div>
			                                                    <div className="row" id="duplicate-schedule">
			                                                        <div className="col-md-2 col-sm-3">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="schedule_date[]" placeholder="Date"
			                                                                value={this.state.scheduleDate} onChange={this.handleChangeScheduleDate.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-2 col-sm-3">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="schedule_time[]" placeholder="Time"
			                                                                value={this.state.time} onChange={this.handleChangeTime.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-4 col-sm-3">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="schedule_place[]" placeholder="Place"
			                                                                value={this.state.place} onChange={this.handleChangePlace.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-4 col-sm-3">
			                                                            <div className="form-group">
			                                                                <input type="text" className="form-control" name="schedule_address[]" placeholder="Address"
			                                                                value={this.state.scheduleAddress} onChange={this.handleChangeScheduleAddress.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                                <div className="center"><a href="#duplicate-schedule" className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another schedule item</a></div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
			                                <h3>Ceremony Package<span className="note">(optional)</span></h3>
			                                <div className="panel-group" id="accordion-4" role="tablist" aria-multiselectable="true">
			                                    <div className="panel panel-default">
			                                        <div className="panel-heading" role="tab" id="accordion-heading-4">
			                                            <h4 className="panel-title">
			                                                <a role="button" data-toggle="collapse" href="#accordion-collapse-4" data-parent="#accordion-4" aria-expanded="false" aria-controls="accordion-collapse-4">
			                                                    <i className="fa fa-cutlery"></i>Add ceremony package
			                                                </a>
			                                            </h4>
			                                        </div>
			                                        <div id="accordion-collapse-4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-4">
			                                            <div className="panel-body">
			                                                <div className="wrapper">
			                                                    <div className="row">
			                                                        <div className="col-md-12 col-sm-6">
			                                                            <div className="form-group">
			                                                            	<label htmlFor="video">Title</label>
			                                                                <input type="text" className="form-control" name="menu_title[]" placeholder="Title" 
			                                                                value={this.state.ceremonyTitle} onChange={this.handleChangeCeremonyTilte.bind(this)}/>
			                                                            </div>
			                                                        </div>
			                                                        <div className="col-md-12 col-sm-6">
			                                                            <div className="form-group">
			                                                           		<label htmlFor="video">Description</label>
			                                                                <div>
											                                    <Editor
																			       	editorCeremonyState={this.state.editorCeremonyState}
																			       	onEditorCeremonyStateChange={this.onEditorCeremonyStateChange.bind(this)}
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
										                                     value={this.state.ceremonyVideo} onChange={this.handleCeremonyVideo.bind(this)}/>
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
			                                                <div className="center"><button onSubmit={this.handleMenuSubmit.bind(this)}className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another meal</button></div>
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