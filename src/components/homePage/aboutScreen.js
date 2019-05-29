import React, {Component} from "react"
import aboutMe from "../../content/aboutMe"
import Fade from "react-reveal"

export default class AboutScreen extends Component {
    render() {
        const interestItems = aboutMe.interests.map(i=>(
            <div className="about_interest_item">
                <div>
                {i.name}
                </div>
            </div>
            ))
        return (
            <div className="about-screen-wrapper">
                <div className="about-screen-container">
                    <div className="heading">About Me</div>
                    <div className="about-screen-contents">
                        <Fade bottom>
                        <div className="about">
                            <div className="about_summary">
                                {aboutMe.summary}
                            </div>
                            These are some other things I love doing:
                            <div className="about_interest">
                                {interestItems}
                            </div>
                        </div>
                        </Fade>
                        <img className="about-images" src={require("./imgs/dance2.png")}/>
                    </div>
                </div>
            </div>
        )
    }
}