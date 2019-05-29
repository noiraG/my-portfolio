import React, {Component} from "react"
import "./styles.scss"
import PenguinLanding from "./penguinLanding";
import PenguinDetails from "./penguinDetails";

export default class PenguinScreen extends Component {
    render() {
        return (
            <div className="penguin-container">
                <PenguinLanding/>
                <img className="penguin-hand" src={require("./imgs/eggWithHand.png")} />
                <PenguinDetails/>
            </div>
        )
    }
}