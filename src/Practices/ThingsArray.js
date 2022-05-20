import React, { useState } from 'react';
import "./ThingsArray.css"

export default function ThingsArray() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const [thingsArray, setthingsArray] = useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        // We'll work on this next
        setThingsArray(prevThingsArray => {
            return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
        })
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <div>moi</div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
