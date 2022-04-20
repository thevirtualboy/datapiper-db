import React from 'react'

const headerBoxStyle = { 
    marginBottom: "0", 
}

const h1Style = {
    marginLeft: "50px", 
    marginTop: "30px", 
    marginBottom: "10px",
    padding: "2px 10px",
    height: "100px",
    borderRadius: "10px 10px 0 0",
    background: "#326bdb",
    color: "white",
}

function Header() {
    return (
        <div style={headerBoxStyle}>
            <h1 style={h1Style}>data piper db</h1>
        </div>
    )
}

export default Header