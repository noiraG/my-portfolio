import React, {Component} from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import Fade from "react-reveal";

const classname = require('classnames')

class FeaturedItem extends Component {
    propTypes = {
        project: PropTypes.object.isRequired
    }

    render() {
        const project = this.props.project
        const skills = project.skills.map((s) => (<div className="skill-text">{s}</div>))
        const right = project.index % 2 === 1;
        const containerClassName = classname(
            "featured-container",
            {"featured-container--right": right})
        const itemClassName = classname(
            "featured-item",
            {"featured-item--right": right})
        const imgClassName = classname(
            "featured-img",
            {"featured-img--right": right})
        const skillsClassName = classname(
            "featured-item_skills",
            {"featured-item_skills--right": right})
        return (
            <div className={containerClassName}>
                {right ?
                    <Fade left>
                        <div className={imgClassName}>
                            <img className="featured-img_file" src={require("./imgs/" + project.image)}/>
                        </div>
                    </Fade> :
                    <Fade right>
                        <div className={imgClassName}>
                            <img className="featured-img_file" src={require("./imgs/" + project.image)}/>
                        </div>
                    </Fade>
                }
                <Fade bottom>
                    <div className={itemClassName}>
                        <div className="featured-item_name">{project.name}</div>
                        <div className="featured-item_description">
                            <div className="featured-item_description_text">{project.description}</div>
                            <div className="featured-item_description_button"
                                 onClick={() => this.props.history.push(project.id)}>Read More
                            </div>
                        </div>
                        <div className={skillsClassName}>{skills}</div>
                    </div>
                </Fade>

            </div>
        )
    }
}

export default withRouter(FeaturedItem)