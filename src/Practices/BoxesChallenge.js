import React, { useState } from "react";
import boxes from "./Components/Boxes"
import "./boxeschallenge.css"
import Box from "./Components/Box"

export default function BoxesChallenge(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
    function toggle() {
        console.log(squares)

    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            onClick={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}