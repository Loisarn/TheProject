import React, {Component} from 'react';
import { ThemeContext } from "./App";

export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? '#black' : "#ecf0f3",
            color: dark ? '#ecf0f3' : '#black',
            padding: "2rem",
            margin: "2rem"
        }
    }
    render() {
        return (
            <ThemeContext.Consumer>
                {darkTheme => {
                    return <div style={this.themeStyles(darkTheme)}>Themes</div>
                }}
            </ThemeContext.Consumer>
        )
    }
}