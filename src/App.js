import React from "react"
//import Header from "./components/Header"
//import Meme from "./components/Meme"
import Practices from "./Practices/Practices"
import "./style.css"

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
export default function App() {
    /*Move practices to Practices.js*/

    return (
        <div>
            <Practices />
        </div>
    )
/*    return (
        <div>
            <Header />
            <Meme />
        </div>
    )*/
}