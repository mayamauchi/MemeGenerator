import React from "react";

export default function Box(props) {
    /*
         * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */

//    console.log(props.key)
    console.log(props.name)
    console.log(props.on)

    const style = {
        backgroundColor : props.on ? "#222222" : "none"
    }
        
    return (
        <div style={style} className="box"></div>
    )
}