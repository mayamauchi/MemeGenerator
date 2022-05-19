/*import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
import "./style.css"

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}*/

import React, {useState} from 'react';
//import Greeting from "./Practices/Practices"
//import State from "./Practices/State"
import Counter from "./Practices/Counter"
import "./style.css"

export default function App() {
    let thingsArray = ["Thing 1", "Thing 2"]
//    Greeting(" Esa")
     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
/*     const thingsElements = thingsArray.map(x => {
        return (
            <p>{x}</p>
        )
    })*/
/*    function clickHandler() {
        thingsArray.push("Thing " + (thingsArray.length + 1))
        console.log(thingsArray)
    }*/
    function clickHandler() {
        const newThingText = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThingText)
        console.log(thingsArray)
    }

    return (
        <div>
            <button onClick={clickHandler}>Add Item</button>
            {thingsElements}
            <Counter />

        </div>
    )
}