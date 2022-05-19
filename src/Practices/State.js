import React, { useState } from 'react';
import "./state.css"

export default function State(name) {
    /**const [isImportant, setIsImportant] = React.useState("Yes")
    
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     
     function handleClick() {
        isImportant == "Yes" ? setIsImportant("No") :  setIsImportant("Yes")
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={handleClick}>
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
*/
        /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
         const [isGoingOut, setIsGoingOut] = useState(false)
//         let answer = isGoingOut ? "Yes" : "No"
         
        function handleClick() {
//            isGoingOut ? setIsGoingOut(false) : setIsGoingOut(true) 
            setIsGoingOut(x => !x) 
        }

         return (
             <div className="state">
                 <h1 className="state--title">Do I feel like going out tonight?</h1>
                 <div className="state--value" onClick={handleClick}>
                     <h1>{isGoingOut ? "Yes" : "No"}</h1>
                 </div>
             </div>
         )
     
}
