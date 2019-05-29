import React, {Component} from "react"
import "./styles.scss"
import Fade from "react-reveal";

export default class GlocalLanding extends Component {
    render() {
        return (
            <div className="glocal-landing-container">
                <Fade>
                    <div className="glocal-primary-info">
                        <div className="glocal-primary-info_name">Glocal</div>
                        <div className="glocal-primary-info_description1">Your Travel Companion</div>
                        <div className="glocal-primary-info_description2">Providing customised recommendations based on your
                            travel
                            preferences
                        </div>
                    </div>
                    <img className="glocal-landing-img" src={require("./imgs/glocalLanding.png")}/>

                    <div className="glocal-secondary-info">
                        <div className="glocal-secondary-info_heading">The Client</div>
                        <div>Grad students in the Master of Product Design and Development Management Program at
                            Northwestern University
                        </div>
                        <div className="glocal-secondary-info_heading">The Challenge</div>
                        <div>Implementing a very ambitious project within a short time period and breaking down the
                            clients' vision into iterative development cycles
                        </div>
                        <div className="glocal-secondary-info_heading">The Outcome</div>
                        <div>A react native application running on Expo that is both intuitive and engaging</div>
                        <div className="glocal-secondary-info_heading">Skills</div>
                        <div>React Native, Expo, Node.JS, AGILE, Javascript, XML</div>
                    </div>
                </Fade>
            </div>
        )
    }
}