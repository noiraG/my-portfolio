import React, {Component} from "react"
import PropTypes from "prop-types"
import "./styles.scss"
import Fade from "react-reveal"

export default class OtherItem extends Component {
    propTypes = {
        project: PropTypes.object.isRequired
    }

    render() {
        const project = this.props.project
        return (
            <Fade>
                <div className="other-item">
                    <img className="other-item_img" src={require("./imgs/" + project.image)}/>
                    <div className="other-item_name">
                        <div className="other-item_name_text">{project.name}</div>
                    </div>
                </div>
            </Fade>
        )
    }
}