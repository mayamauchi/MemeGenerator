import React, { useState } from "react";
import boxes from "./Components/Boxes"
import "./boxeschallenge.css"
import Box from "./Components/Box"

export default function BoxesChallenge(props) {
    const [squares, setSquares] = useState(boxes)
    
/*    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on}
            name="Esa"
        />
    ))*/
    const squareElements = squares.map(square => {
        console.log(square)
        console.log(square.on)
        return (
            <Box 
                key={square.id}
                on={square.on}
                name="Esa"
            />
        )
    })
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    
    return (
        <main>
            {squareElements}
        </main>
    )
}