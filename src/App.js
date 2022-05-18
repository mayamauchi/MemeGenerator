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

import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
    let thingsArray = ["Thing 1", "Thing 2"]
    
     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
/*     const thingsElements = thingsArray.map(x => {
        return (
            <p>{x}</p>
        )
    })*/
    function clickHandler() {
        thingsArray.push("Thing " + (thingsArray.length + 1))
        console.log(thingsArray)
    }

    return (
        <div>
            <button onClick={clickHandler}>Add Item</button>
            {thingsElements}
        </div>
    )
}