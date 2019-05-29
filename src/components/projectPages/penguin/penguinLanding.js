import React, {Component} from "react"
import "./styles.scss"

export default class PenguinLanding extends Component {
    render() {
        return (
            <div className="landing-container">
                <div className="info">
                    <div className="info_primary-name">Smart Egg</div>
                    <div className="info_secondary-description">
                        Jan 2019- June 2019
                    </div>
                    <div className="info_secondary-heading">Our Goal</div>
                    <div className="info_secondary-description">
                        To create a Smart Egg with electronic sensors that can collect data on the incubation process.
                        This data includes temperature, humidity, orientation, movement, and force exerted on the eggs.
                    </div>
                    <div className="info_secondary-heading">Skills</div>
                    <div className="info_secondary-description">
                        Arduino, CAD, Working with Sensors, Designing for Robustness
                    </div>
                    <div className="info_secondary-heading">The Team</div>
                    <div className="info_secondary-description">
                        Kaitlyn Ko, Hillary Tumbali, Ignacio Gonzales, Justin Peh
                    </div>
                </div>
                <div className="client-info">
                    <div className="client-info_name">The Client</div>
                    <img className="client-info_logo" src={require("./imgs/sheddLogo.png")}/>
                </div>
            </div>
        )
    }
}