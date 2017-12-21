import React from 'react';
import { FooterWrapper , FooterNav }from './FooterLanding';

export class FooterContainer extends React.Component {
    render(){
        return(
        <footer id="page-footer">
            <div className="footer-wrapper">
                <div className="block">
                    <FooterWrapper />
                </div>
                <FooterNav />
            </div>
        </footer>

        );
    }
}