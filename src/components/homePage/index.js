import React, {Component} from "react"

import LandingScreen from "./landingScreen"
import WorkScreen from "./workScreen";

import "./styles.scss"
import AboutScreen from "./aboutScreen";

export default class Index extends Component {
    constructor(){
        super()
        this.state={
            currentScrollHeight: null
        }
    }
    componentDidMount () {
        window.onscroll =()=>{
            this.setState({currentScrollHeight: window.scrollY})
        }
    }
    render() {
        const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)

        return (
            <div className="homepage-container">
                <LandingScreen style={{opacity: opacity}}/>
                <WorkScreen/>
                <AboutScreen/>
            </div>
        )
    }
}