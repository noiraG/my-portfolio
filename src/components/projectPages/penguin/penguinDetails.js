import React, {Component} from "react"
import "./styles.scss"
import Details from "../../../content/smartEgg"

export default class PenguinDetails extends Component {
    render() {
        return (
            <div className="penguin-details">

                <div className="penguin-details_row-reverse">
                    <div className="penguin-details_col">
                        <div className="penguin-details_heading">Overview</div>
                        <div>{Details.overview}</div>
                    </div>
                    <img className="penguin-details_imgM" src={require("./imgs/closedEgg.png")}/>
                </div>
                <div className="penguin-details_heading">The Process</div>
                <div>{Details.process}</div>
                <div className="penguin-details_heading">Figuring out the Technical Stuff</div>
                <div>{Details.detail1}</div>
                <img className="penguin-details_imgL" src={require("./imgs/humidityEgg.png")}/>
                <div className="penguin-details_row">
                    <img className="penguin-details_imgM" src={require("./imgs/strainEgg.png")}/>
                    <div className="penguin-details_col">{Details.detail2}</div>
                </div>
                <div className="penguin-details_row-reverse">
                    <div className="penguin-details_col-1">{Details.detail3}</div>
                    <div className="penguin-details_row-reverse_images">
                        <img className="penguin-details_imgXS" src={require("./imgs/topViewEgg.png")}/>
                        <img className="penguin-details_imgS" src={require("./imgs/sideViewEgg.png")}/>
                    </div>
                </div>
                <div className="penguin-details_row">
                    <div className="penguin-details_col">
                        <div className="penguin-details_heading">Focusing on the User</div>
                        <div>{Details.user1}</div>
                    </div>
                    <img className="penguin-details_imgM" src={require("./imgs/annotatedEgg.png")}/>
                </div>
                <div>{Details.user2}</div>
            </div>
        )
    }
}