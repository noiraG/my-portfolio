import React, {Component} from "react"
import {withRouter} from "react-router-dom"
import "./styles.scss"

class NavigationBar extends Component {
    render() {
        return (
            <div className="navigation-bar-container">
                <div className="home-button" onClick={()=>this.props.history.push("/")}>GARION NG</div>
            </div>
        )
    }
}

export default withRouter(NavigationBar)