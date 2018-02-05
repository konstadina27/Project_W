import React from 'react';

export class Included extends React.Component {
    render(){
        return(
            <div>
                <div className="section-title">
                    <h2>What Is Included</h2>
                    <h3 className="subtitle">Check what you’ll get after registration</h3>
                </div>
                <ul className="list-unstyled bullets">
                    <li>Praesent id diam non est molestie elementum</li>
                    <li>Curabitur cursus, eros vitae tempor eleifend, magna est venenatis lectus</li>
                    <li>a volutpat lacus tortor a sem. Class aptent taciti sociosqu</li>
                    <li>ad litora torquent per conubia nostra, per inceptos himenaeos.</li>
                    <li>Proin efficitur at diam nec pharetra</li>
                </ul>
            </div>
        )
    }
}
