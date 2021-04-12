
import React from "react";

class Header extends React.Component {

    render() {
        const headerstyle = {
            width: "100%",
            backgroundColor: "#F0F3FF",
            textAlign: "center",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        };

        return <div style={headerstyle}>
            <div className="headerText">
                <h2>Sporting Goods</h2>
            </div>
        </div>
    }  
}

export default Header;
