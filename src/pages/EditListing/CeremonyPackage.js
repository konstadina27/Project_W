import React from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class CeremonyPackage extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<section>
			    <h3>Ceremony Package<span className="note">(optional)</span></h3>
			    <div className="panel-group" id="accordion-4" role="tablist" aria-multiselectable="true">
			        <div className="panel panel-default">
				        <div className="panel-heading" role="tab" id="accordion-heading-4">
			                <h4 className="panel-title">
				                <a role="button" data-toggle="collapse" href={`#accordion-collapse${this.props.cerId}`} data-parent="#accordion-4" aria-expanded="false" aria-controls={`accordion-collapse${this.props.cerId}`}>
				                    <i className="fa fa-cutlery"></i>Add Ceremony package
				                </a>
			                </h4>
			            </div>
			            <div id={`accordion-collapse${this.props.cerId}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="accordion-heading-4">
			                <div className="panel-body">
			                    <div className="wrapper">
			                        <div className="row">
			                            <div className="col-md-8 col-sm-8">
			                                <div className="form-group">
			                                   	<label htmlFor="video">Title</label>
			                                    <input type="text" className="form-control" name="ceremonyTitle" placeholder="Title" 
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-12 col-sm-12">
			                                <div className="form-group">
			                                	<label htmlFor="video">Description</label>
			                                	<div>
											        <Editor
														editorState={this.props.editorState}
														onEditorStateChange={this.props.onEditorStateChange}
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
											    <input type="text" className="form-control" name="ceremonyVideo" id="video" placeholder="http://"
											    	 onChange={this.props.handleValueChange}/>
							        		</div>
									    </div>
									    <div className="col-md-12 col-sm-12">
										    <div className="file-uploaded-images2">
												<div className="image2">
													<figure><i className="fa fa-close"></i></figure>
													<img src="assets/img/items/1.jpg" alt="" />
												</div>
												<div className="image2">
													<figure><i className="fa fa-close"></i></figure>
													<img src="assets/img/items/2.jpg" alt="" />
												</div>
											</div>
											<div className="file-upload-previews2"></div>
											<div className="file-upload2">
												<input type="file" name="ceremonyFiles" multiple className="file-upload-input2 with-preview" onChange={this.props.handleValueChange}/>
												<span>Click or drag images here</span>
											</div>
										</div>
			                        </div>
			                    </div>
			                </div>
		                </div>
	                </div>
	            </div>
	        </section>
		)
	}
}