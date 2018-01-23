import React from 'react';
 
export class GalleryContent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			video:""
		}
	}
	handleVideo(event){
		this.setState({
			video: event.target.value
		})
	}
	render(){
		return(
			<section>
			    <h3>Gallery</h3>
			    <div className="file-uploaded-images">
			        <div className="image">
			            <figure><i className="fa fa-close"></i></figure>
			            <img src="assets/img/items/1.jpg" alt="" />
			        </div>
			        <div className="image">
			            <figure><i className="fa fa-close"></i></figure>
			            <img src="assets/img/items/2.jpg" alt="" />
			        </div>
			        <div className="image">
			            <figure><i className="fa fa-close"></i></figure>
			            <img src="assets/img/items/4.jpg" alt="" />
			        </div>
			    </div>
			    <div className="file-upload-previews"></div>
			    <div className="file-upload">
			        <input type="file" name="files[]" className="file-upload-input with-preview"
			         ref={input => {this.fileInput = input}} />
			        <span>Click or drag images here</span>
			    </div>
			    <div className="form-group">
			        <label htmlFor="video">Video URL</label>
			        <input type="text" className="form-control" name="video" id="video" placeholder="http://" value={this.state.video} onChange={this.handleVideo.bind(this)}/>
			    </div>
			</section>
		)
	}
}