import React, { Component } from "react";
import ThemeContext from "./context";

class Level2 extends Component {
    // static contextType = ThemeContext;
    componentDidMount() {
        console.log(this.context);
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => <div>{context.salam}</div>}
            </ThemeContext.Consumer>
        );
    }
}
Level2.contextType = ThemeContext;
export default Level2;
