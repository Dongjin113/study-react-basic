import React, { useState } from "react";
import "./square.css"

const Square = ({ onClick, value }) => {

    return (
        <button className="square"
            onClick={() => { onClick() }}>
            {value}
        </button>
    )
}

export default Square;