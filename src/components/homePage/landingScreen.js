import React, {Component} from "react"
import profileImg from "./imgs/profile-pic.png";

export default class LandingScreen extends Component {
    render() {
        return (
            <div className="landing-screen-container">
                <img className="profile-img" src={profileImg}/>
                <div className="description-container">
                    <div style={this.props.style} >Hi! I'm<br/>Garion</div>
                    <div style={this.props.style} >I'm a Designer. <br/>I'm a Software Developer.</div>
                    <div style={this.props.style} >I aspire to create products that enhance user experiences and bring delight to people.</div>
                </div>
            </div>
        )
    }
}