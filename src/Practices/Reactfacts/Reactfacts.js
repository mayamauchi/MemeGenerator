import React, {useState} from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import "./Reactfacts.css"

//https://www.figma.com/file/PgvQLtyTdUf8e9K9khjzZJ/ReactFacts-Light%2FDark-Modes?node-id=0%3A1
export default function App() {
    const [isDark, setIsDark] = useState(false)

    function toggle() {
        setIsDark(prevIsDark => !prevIsDark)
    }

    return (
        <div className="container">
            <Navbar darkMode={isDark} toggleDarkMode={toggle}/>
            <Main darkMode={isDark}/>
        </div>
    )
}