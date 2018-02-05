import React from 'react';
import { 
    BrowserRouter as Router,
    NavLink 
} from 'react-router-dom';

export class Steps extends React.Component {
    render(){
        return(
            <Router>
                <div className="col-md-8 cols-m-8 col-md-offset-2">
                    <div className="step">
                        <div className="circle">
                            <figure>{this.props.stepCount}</figure>
                            <i className="icon_id"></i>
                            <div className={this.props.circleOpacity}></div>
                        </div>
                        <div className="box">
                            <h2>{this.props.title}</h2>
                            <p>{this.props.text}</p>
                            <NavLink to={this.props.navPage} target="_self" className="btn btn-default btn-rounded shadow btn-xs">{this.props.buttonText}</NavLink>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}