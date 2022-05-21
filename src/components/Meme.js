import React, { useState } from "react"
import memesData from "../memesData.js"
import "./meme.css"

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    
    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme, setMeme] = useState({
        topText : '',
        bottomText : '',
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(memesData.data.memes)
  
    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
//        setMemeImage(memesArray[randomNumber].url)
/*        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage : allMemeImages[randomNumber].url
            }
        })*/
/*        setMeme(function(prevMeme) {
            return {
                ...prevMeme,
                randomImage : allMemeImages[randomNumber].url
            }
        })*/
        setMeme(prevMeme => ({
            
                ...prevMeme,
                randomImage : allMemeImages[randomNumber].url
            })
        )
/*        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : allMemeImages[randomNumber].url
        }))

        function toggleFavoriteV2() {
            //return object:
            setContact(prevContact => ({
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }))
        }*/
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
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}