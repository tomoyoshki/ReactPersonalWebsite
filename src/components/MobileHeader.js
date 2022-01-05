import React from 'react'
import { Link } from 'react-router-dom'

function MobileHeader() {
    const mobileStyle = {
        transform: "none",
        textDecoration: "none",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "23px"
    }

    return (
        <div className = "header" id="header">
            <Link to="/" className = "header-left" style = {mobileStyle}>TOMOYOSHI KIMURA</Link>
        </div>
    )
}

export default MobileHeader