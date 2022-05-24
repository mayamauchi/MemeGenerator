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
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })

/*        let index = id -1
        let s = squares.slice(0,index)
        let i = squares.slice(index,index+1)
        let e = squares.slice(index+1,squares.length) 

        console.log([s, i, e])
//        console.log
        setSquares(oldSquares => {
            console.log(oldSquares)
            return [
                ...oldSquares,
                oldSquares[id].on = !oldSquares[id].on
            ]
        })*/
//        setThingsArray(thing => [...thingsArray, newThing])
        console.log("---------------")
//        console.log(squares)
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