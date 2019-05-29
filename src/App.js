import React, {Component} from 'react';
import './App.css';
import HomePage from "./components/homePage"
import NavigationBar from "./components/navigationBar";
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import GlocalScreen from "./components/projectPages/glocal";
import MSDScreen from "./components/projectPages/msd"
import PenguinScreen from "./components/projectPages/penguin";
import ScrollToTop from "./components/scrollToTop"

const pages = {
    HOMEPAGE: 'home',
    GLOCAL: 'glocal',
    MERCK: 'merck',
    PENGUIN: 'penguin',
    SIA: 'sia',
    SOLEBER: 'soleber'
}

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: pages.HOMEPAGE
        }
    }

    render() {

        return (
            <BrowserRouter>
                <ScrollToTop>
                    <div className="App">
                        <Route
                            exact path="/"
                            render={() => <HomePage/>}
                        />
                        <Route
                            exact path="/glocal"
                            render={() => <GlocalScreen/>}
                        />
                        <Route
                            exact path="/msd-professional-attachment"
                            render={() => <MSDScreen/>}
                        />
                        <Route
                            exact path="/smart-penguin-egg"
                            render={() => <PenguinScreen/>}
                        />
                        <NavigationBar/>
                    </div>
                </ScrollToTop>
            </BrowserRouter>
        );
    }
}

