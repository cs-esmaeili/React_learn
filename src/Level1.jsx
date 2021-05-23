import React, { Component } from "react";
import Level2 from "./Level2";


class Level1 extends Component {
    render() {
        return (
            <div>
                Level 1 <Level2 />
            </div>
        );
    }
}

export default Level1;
