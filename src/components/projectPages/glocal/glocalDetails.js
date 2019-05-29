import React, {Component} from "react"
import "./styles.scss"
import Details from "../../../content/glocal"

export default class GlocalDetails extends Component {
    render() {
        return (
            <div className="glocal-details">
                <div className="glocal-details_heading">Overview</div>
                <div>{Details.overview}</div>
                <img className="glocal-details_imgS" src={require("./imgs/glocalPlanning.png")}/>
                <div className="glocal-details_heading">The Process</div>
                <div>{Details.process}</div>
                <div className="glocal-details_heading">Platform</div>
                <div>{Details.platform}</div>
                <div className="glocal-details_heading">Features</div>
                <img className="glocal-details_imgL" src={require("./imgs/browse.png")}/>
                <img className="glocal-details_imgL" src={require("./imgs/list.png")}/>
                <img className="glocal-details_imgL" src={require("./imgs/itinerary.png")}/>
            </div>
        )
    }
}