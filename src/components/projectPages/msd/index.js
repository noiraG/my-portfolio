import React, {Component} from "react"
import "./styles.scss"

export default class MSDScreen extends Component {
    render() {
        return (
            <div className="msd-container">
                <img className="logo" src={require("./imgs/msgLogo.png")}/>
                <div className="info">
                    <div className="info_primary-name">Professional Attachment</div>
                    <div className="info_primary-description">@ MSD Prague IT Innovation Hub</div>
                    <div className="info_secondary-description">
                        July 2018 - Sept 2018
                    </div>
                    <div className="info_secondary-heading">My Role</div>
                    <div className="info_secondary-description">
                        I was a javascript developer intern in a team with three other developers, working on a new
                        software product for the company. We were developing a React based web application to be
                        used by clinical researchers for reporting and logging data.
                    </div>
                    <div className="info_secondary-description">
                        Working on a product that was yet to be released, I was able to observe and learn about the
                        activities leading up to the first realease. In addition to implementing features from the
                        refined user stories, I also worked closely with UX designers and researches and observed
                        users interacting with the product we created.
                    </div>
                    <div className="info_secondary-heading">Skills</div>
                    <div className="info_secondary-description">Node.JS Express, ReactJS, GraphQL, Redux, SCRUM/AGILE programming, and deployment
                        pipelines
                    </div>
                </div>
            </div>
        )
    }
}