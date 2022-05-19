import React, {useState} from 'react';

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

export default function Greeting(name) {
    /* Challenge: Replace our hard-coded "Yes" on the page with 
    * some state initiated with React.useState()
    */
   const result = React.useState("Hello")
   console.log(result)
   return (
       <div className="state">
           <h1 className="state--title">Is state important to know?</h1>
           <div className="state--value">
               <h1>{result[0]}</h1>
           </div>
       </div>
   )
/*
    const date = new Date()
    const hours = date.getHours()
    let greeting = "Good "
    let time

    if (4 <= hours && hours <= 12)
        time = "morning"
    else if (12 <= hours && hours <= 17)
        time = "afternoon"
    else if (17 <= hours && hours <= 20)
        time = "evening"
    else if (12 <= hours && hours <= 4)
        time = "night"
    
    greeting = "Good " + time + name
    alert(greeting)
    return `Good ${timeOfDay}, ${name}!`
*/
}
