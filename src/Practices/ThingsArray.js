import React, { useState } from 'react';
import "./ThingsArray.css"

export default function ThingsArray() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    const [thingsArray, setThingsArray] = useState(["Thing1", "Thing2"])
     function addItem() {
        // Build from scratch :)
        const newThing = `Thing ${(thingsArray.length+1)}`
        setThingsArray(thing => [...thingsArray, newThing])
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    console.log(thingsArray)
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}
