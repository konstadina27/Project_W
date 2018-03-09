import React from 'react';
import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class ServicesPackage extends React.Component {
	constructor(props){
		super(props);
		this.state={
			service: [
			{id:0, editorState: EditorState.createEmpty(), servicesTitle:"", servicesVideo:"", servicesPrice:"", serviceFiles:""}
			]		
		}
	}

	render(){
		return(
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
			                                    <input type="text" className="form-control" name="servicesTitle" placeholder="Title" 
			                                    onChange={this.props.handleValueChange}/>
			                                </div>
			                            </div>
			                            <div className="col-md-4 col-sm-4">
			                                <div className="form-group">
			                                    <label htmlFor="video">Services Price</label>
			                                    <input type="text" className="form-control" name="servicesPrice" 
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
											    <label htmlFor="video">Services Video URL</label>
											    <input type="text" className="form-control" name="servicesVideo" id="video" placeholder="http://"
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
												<input type="file" name="serviceFiles" multiple className="file-upload-input2 with-preview" onChange={this.props.handleValueChange}/>
												<span>Click or drag images here</span>
											</div>
										</div>
			                        </div>
			                    </div>
			                    <div className="center"><button onClick={this.props.handleServiceSubmit} className="btn btn-rounded btn-primary btn-framed btn-light-frame btn-xs icon duplicate"><i className="fa fa-plus"></i>Add another service</button></div>
			                </div>
		                </div>
	                </div>
	            </div>
	        </section>
		)
	}
}