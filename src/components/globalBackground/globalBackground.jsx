import React from "react";
import './globalBackground.css'

class GlobalBackground extends React.Component {
    render() {
        return (
            <div className="global-overlay">
                <div className="overlay skew-part">
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
            </div>
        );
    }
}

export default GlobalBackground;