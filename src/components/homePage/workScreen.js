import React, {Component} from "react"
import projects from "../../content/projects"
import FeaturedItem from "./featuredItem"
import OtherItem from "./otherItem"

export default class WorkScreen extends Component {
    render() {
        const featuredItems = projects.featured.map((p) => {
            return (<FeaturedItem project={p}/>)
        })
        const otherItems = projects.others.map((p) => {
            return (<OtherItem project={p}/>)
        })
        return (
            <div className="work-screen-container">
                <div className="heading">My Work</div>
                <div className="featured-item-container">
                    {featuredItems}
                </div>
                <div className="heading">Other Projects</div>
                <div className="other-item-container">
                    {otherItems}
                </div>
            </div>
        )
    }
}