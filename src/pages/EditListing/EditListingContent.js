import React from 'react';
import {CeremonyPackage} from './CeremonyPackage';
import {MenuContent} from './MenuContent';
import {ScheduleContent} from './ScheduleContent';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export class EditListingContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
/*			editorState: EditorState.createEmpty(),*/
			title:"",
			catTitle:[{id:1 , value:""}],
			category:[],
			description:"",
			tags:"",
			cost:"",
			hosting:"",
			startDate:"",
			lastDate:"",
			equip:"",
			files:[],
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
			schedule: [
			{schedId:1, scheduleDate:"",time:"",place:"",scheduleAddress:""}
			],
			ceremony: [
			{cerId:2, editorState: EditorState.createEmpty(), ceremonyTitle:"", ceremonyVideo:"", ceremonyFiles:[]}
			],
			menu: [
			{menuId:3, menuTitle:"",menuDesc:"", menuVideo:"", menuType:[]}
			]			

		}
	}
/*	onEditorStateChange(editorState){
	    this.setState({
	      editorState,
	    })
  	}*/

/*	onEditorMusicStateChange(editorMusicState){
	    this.setState({
	      editorMusicState,
	    })
  	}*/
	handleValueChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleCategory(event){
		this.setState({
			category:[...event.target.selectedOptions].map(o => o.value)
		})
	}
	handleMenuType(event){
		this.setState({
			menuType:[...event.target.selectedOptions].map(o => o.value)
		})
	}
	handleUpdateCat(newCat,i){
		let catTitle = this.state.catTitle

		catTitle.push({
			id: (catTitle.length + 1),
			value:this.state.value
		})
		this.setState ({
			catTitle:catTitle
		})
		newCat.preventDefault();
	}
	handleOpenHours(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	onEditorStateChange(editorState){
	    this.setState({
	      editorState,
	    })
  	}
    handleCeremonySubmit(event) {
		let ceremony = this.state.ceremony
		ceremony.push({
			cerId: (ceremony.length + 1),
			ceremonyTitle: this.state.ceremonyTitle,
			ceremonyVideo: this.state.ceremonyVideo,
			ceremonyFiles:this.state.ceremonyFiles,
			editorState:JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
		})
		this.setState({
			ceremony: ceremony
		})
		event.preventDefault();
      }
    handleMenuSubmit(event) {
		let menu = this.state.menu
		menu.push({
			menuId: (menu.length + 100),
			menuTitle: this.state.menuTitle,
			menuDesc: this.state.menuDesc,
			menuVideo:this.state.menuVideo,
			menuType:this.state.menuType
		})
		this.setState({
			menu: menu
		})
		event.preventDefault();
      }
    handleScheduleSubmit(event) {
		let schedule = this.state.schedule
		schedule.push({
			schedId: (schedule.length + 200),
			scheduleDate: this.state.scheduleDate,
			time: this.state.time,
			place:this.state.place,
			scheduleAddress:this.state.scheduleAddress
		})
		this.setState({
			schedule: schedule
		})
		event.preventDefault();
      }
    handleSubmit(event) {
/*    	this.state.editorState
    	this.state.editorMusicState
		const raw = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()))
		console.log(raw)
		const rawMusic = JSON.stringify(convertToRaw(this.state.editorMusicState.getCurrentContent()))
		console.log(rawMusic)*/
/*      var content = this.state.editorServicesState*/
/*		const rawService = JSON.stringify(convertToRaw(content.getCurrentContent()))
		console.log(content)
		console.log(content.getCurrentContent())
		console.log(convertToRaw(content.getCurrentContent()))
		convertToRaw(rawService)*/
        console.log(this.state);
        event.preventDefault();
      }
	componentDidMount(){
		this.setState({
			catTitle:this.state.catTitle
		})
		}
	render(){
		const catTitles = this.state.catTitle.map((cat,i) => {
			if ( this.state.catTitle !== null) {
			return <option key={cat.id} value={cat.value}>{this.state.value}</option>
			}
		})
		const menus = this.state.menu.map((m,i) => {
			if( this.state.menu !== null){
			return <MenuContent key={i} handleMenuSubmit={this.handleMenuSubmit.bind(this)} handleMenuType={this.handleMenuType.bind(this)}
			 	handleValueChange={this.handleValueChange.bind(this)} menuId={m.menuId}/>
			}
		});
		const ceremonies = this.state.ceremony.map((cer,i) => {
			if(this.state.ceremony !== null){
				return <CeremonyPackage key={i} handleCeremonySubmit={this.handleCeremonySubmit.bind(this)} editorState={this.state.editorState}
			 		handleValueChange={this.handleValueChange.bind(this)} onEditorStateChange={this.onEditorStateChange.bind(this)} cerId={cer.cerId}/>		

			}
		});
		const schedules = this.state.schedule.map((sched,i) => {
			if(this.state.schedule !== null){
				return <ScheduleContent key={i} handleScheduleSubmit={this.handleScheduleSubmit.bind(this)} 
			 		handleValueChange={this.handleValueChange.bind(this)} schedId={sched.schedId}/>		

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
			                                            onChange={this.handleValueChange.bind(this)}/>
			                                        </div>
			                                    </div>
			                               		<div className="col-md-9 col-sm-9">
			                                        <div className="form-group">
			                                            <label htmlFor="title">New Category</label>
			                                            <input type="text" className="form-control" name="value" id="title" onChange={this.handleValueChange.bind(this)}/>
			                                        <button onClick={this.handleUpdateCat.bind(this)}>Add Category</button>
			                                        </div>
			                                        
			                                    </div>
			                                    <div className="col-md-3 col-sm-3">
			                                        <div className="form-group">
			                                        	
			                                            <label htmlFor="category">Category</label>
			                                            <select className="form-control selectpicker" name="category" id="category" multiple={true}
			                                             onChange={this.handleCategory.bind(this)}>
					                    					<option value="" disabled>Category</option>
					                        				<option value="Restaurant">Restaurant</option>
					                        				<option value="Event">Event</option>
					                       					<option value="Adrenaline">Adrenaline</option>
					                        				<option value="Sport">Sport</option>
					                        				<option value="Wellness">Wellness</option>
					                        				{catTitles}
			                                            </select>
													
			                                        </div>
			                                    </div>
												<div className="col-md-12 col-sm-9">
					                                <div className="form-group">
					                                    <label htmlFor="description">Description</label>
		{/*			                                    <div>
					                                     <Editor
													       	editorState={this.state.editorState}
													       	onEditorStateChange={this.onEditorStateChange.bind(this)}
															wrapperClassName="wrapper-class"
															editorClassName="editor-class"
															toolbarClassName="toolbar-class"	
														/>
														</div>*/}
					                                </div>
				                            	</div>
				                       		</div>
			                                <div className="row">
				                                <div className="col-md-9 col-sm-9">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Tags</label>
					                                    <input type="text" className="form-control" name="tags" id="tags" onChange={this.handleValueChange.bind(this)}  />
					                                </div>
					                            </div>
					                            <div className="col-md-3 col-sm-3">
					                     			<div className="form-group">
				                                        <label htmlFor="title">Cost Per Person</label>
				                                        <input type="text" className="form-control" name="cost" id="title" 
				                                        onChange={this.handleValueChange.bind(this)}/>
				                                    </div>
					                            </div>
					                            <div className="col-md-4 col-sm-4">
				                                   <div className="form-group">
				                                        <label htmlFor="category">Hosting</label>
				                                        <select className="form-control selectpicker" name="hosting" id="category" 
				                                        onChange={this.handleValueChange.bind(this)}>
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
                               								<input type="text" className="form-control date-picker" name="startDate" placeholder="From" 
                               								onChange={this.handleValueChange.bind(this)} />
                                						</div>
                                						<div className="col-md-6 col-sm-4">
                               								<input type="text" className="form-control date-picker" name="lastDate" placeholder="Until" 
                               								onChange={this.handleValueChange.bind(this)} />
                                						</div>
					                                </div>
				                                </div>
				                            	<div className="col-md-3 col-sm-3">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Extra Cost/Equipment</label>
					                                    <input type="text" className="form-control" name="extraCost" id="tags" onChange={this.handleValueChange.bind(this)}  />
					                                </div>
				                                </div>
				                                <div className="col-md-12 col-sm-9">
					                                <div className="form-group">
					                                    <label htmlFor="tags">Music Equipment</label>
}
{/*					                                    <div>
						                                    <Editor
														       	editorMusicState={this.state.editorMusicState}
														       	onEditorMusicStateChange={this.onEditorMusicStateChange.bind(this)}
																wrapperClassName="wrapper-class"
																editorClassName="editor-class"
																toolbarClassName="toolbar-class"	
															/>
														</div>*/}
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
			                                    <input type="file" name="files" className="file-upload-input with-preview" multiple title="Click to add files" onChange={this.handleValueChange.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="monClose"  
			                                                            onChange={this.handleOpenHours.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="tueClose"
			                                                            onChange={this.handleOpenHours.bind(this)} />
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
			                                                            onChange={this.handleOpenHours.bind(this)} />
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="wedClose"
			                                                            onChange={this.handleOpenHours.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="thuClose" 
			                                                            onChange={this.handleOpenHours.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="friClose"
			                                                            onChange={this.handleOpenHours.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="satClose" 
			                                                            onChange={this.handleOpenHours.bind(this)}/>
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
			                                                            onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                    <div className="col-md-4 col-sm-4">
			                                                        <div className="form-group">
			                                                            <input type="text" className="form-control" name="sunClose" 
			                                                           onChange={this.handleOpenHours.bind(this)}/>
			                                                        </div>
			                                                    </div>
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </section>
			                            <section>
											{menus}	
											<div className="center"><button onClick={this.handleMenuSubmit.bind(this)} className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another Restaurant menu</button></div>
										</section>
			                       		<section>
											{schedules}	
											<div className="center"><button onClick={this.handleScheduleSubmit.bind(this)} className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another schedule</button></div>
										</section>
			                       		<section>
											{ceremonies}	
											<div className="center"><button onClick={this.handleCeremonySubmit.bind(this)} className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another Ceremony</button></div>
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