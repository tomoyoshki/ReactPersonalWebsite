import React from 'react'
import { Link } from 'react-router-dom'

function Header(currentState) {
    let renderButton = (targetState) => {
        let str = "/"
        if(targetState !== "main") {
            str = str + targetState
        }
        if(targetState === currentState) {
            // targetState = targetState.charAt(0).toUpperCase() + targetState.slice(1);
            targetState = targetState.toUpperCase();
            return(
                <Link style = {{
                    color: "rgb(255, 85, 46)",
                }} className = "headerButton" to={str}>{targetState}</Link>
            )
        } else {
            // targetState = targetState.charAt(0).toUpperCase() + targetState.slice(1);
            targetState = targetState.toUpperCase();
            return(
                <Link className = "headerButton" to={str}>{targetState}</Link>
            )
        }
    }
    return (
        <div className = "header" id="header">
            <Link to="/" className = "header-left">TOMOYOSHI KIMURA</Link>
            <div className = "header-right" style = {{
                width: "50%",
                justifyContent: "space-evenly"
            }}>
                {renderButton("main")}
                {renderButton("education")}
                {renderButton("portfolio")}
                {renderButton("about")}
            </div>
        </div>
    )
}

export default Header