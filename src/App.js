import React, { Component } from "react";
import ThemeContext from "./context";
import Level1 from "./Level1";
import ErrorBoundary from "./ErrorBoundary";
import ErrorSmuggler from "./ErrorSmuggler";

class App extends Component {
    salam = "haha";

    constructor(props) {
        super(props);
        ErrorBoundary.getDerivedStateFromError();
    }

    render() {
        return (
            <>
                <ErrorBoundary>
                    <ErrorSmuggler />
                    <ThemeContext.Provider value={{ salam: "kiri" }}>
                        <div>
                            main
                            <Level1 />
                        </div>
                    </ThemeContext.Provider>
                </ErrorBoundary>
            </>
        );
    }
}

export default App;
