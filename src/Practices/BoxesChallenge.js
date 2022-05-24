import React, { useState } from "react";
import boxes from "./Components/Boxes"
import "./boxeschallenge.css"
import Box from "./Components/Box"

export default function BoxesChallenge(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        setSquares(prevSquares => {
            return prevSquares.map(square => {
                return square.id == id ? {...square, on: !square.on } : square
            }
        )})
/*
        setSquares(prevSquares => {
            return prevSquares.map(square => {return 1}
        )})
        */
/*        let index = id -1
        let s = squares.slice(0,index)
        let i = squares.slice(index,index+1)
        let e = squares.slice(index+1,squares.length) 
*/
    }
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}