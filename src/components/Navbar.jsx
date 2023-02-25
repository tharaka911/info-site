import React from "react";
import logo from "/home/nawwa/Desktop/nawwadev2/react-scrimba/info-site/src/assets/react.svg";


export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="react-logo" className="img1" />

                <h3>ReactFacts</h3>
            </div>

            <div className="navbar-right">
                <h4>React Course - Project 1</h4>

            </div>

        </div>
    );
}