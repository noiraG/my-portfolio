import React, {Component} from "react"
import GlocalLanding from "./glocalLanding";
import "./styles.scss"
import GlocalDetails from "./glocalDetails";

export default class GlocalScreen extends Component {
    render() {
        return (
            <div className="glocal-container">
                <GlocalLanding/>
                <GlocalDetails/>
            </div>
        )
    }
}