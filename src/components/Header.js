import React from "react";

function Header(props) {
    return (
        <div>
            <ul>
                <li>
                    <p>Memory Game</p>
                </li>
                <li style={{ float: "right" }}>
                    <p>{props.highScore}</p>
                </li>
                <li style={{ float: "right" }}>
                    <p>Best Score:</p>
                </li>
                <li style={{ float: "right" }}>
                    <p>{props.score}</p>
                </li>
                <li style={{ float: "right" }}>
                    <p>Score:</p>
                </li>
            </ul>
        </div>
    );
}

export default Header;