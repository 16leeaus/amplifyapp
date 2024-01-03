import React from "react";

const SideNav = (props) => {
    return (
        <nav className="left-navbar">
            <button className="value">Dashboard</button>
            <button className="value">Characters</button>
            <button className="value">Manufacturing</button>
            <button className="value">Research</button>
            <button className="value">Test</button>
        </nav>
    );
};

export default SideNav;