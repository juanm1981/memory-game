import React from "react";


const Square = (props) => {

    return (
        <div className={`square${props.n.num}`} id={props.n.num} onClick={props.n.handle}>

        </div>
    );
}

export default Square;