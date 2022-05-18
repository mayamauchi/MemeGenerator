import React from "react"
import memesData from "../memesData.js"

export default function Meme() {
    /**
     * Challenge: Get a random image from the `memesData` array
     * when the "new meme image" button is clicked.
     * 
     * Log the URL of the image to the console. (Don't worry
     * about displaying the image yet)
     */
     function generateRandom(maxLimit = 100){
        let rand = Math.random() * maxLimit;
      
        rand = Math.floor(rand); // 99
      
        return rand;
     }

      function clickHandler() {
        let imageNro = generateRandom();
        console.log(imageNro)
        console.log(memesData.data.memes[imageNro].url)
      }

      return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={clickHandler}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}