import React from 'react';
import '../App/App.css';
import Instructions from '../chapter3/Instructions.js';
function JsxElement(){
    const greeting = "greeting";
    const displayEmojiName = event => alert(event.target.id);
    const displayAction = false;
    const emojis = [
        {
            emoji: "😀",
            name: "grinning face"
        },
        {
            emoji: "🎉",
            name: "party popper"
        },
        {
            emoji: "💃",
            name:"woman dancing"
        }
    ]
    return(<div className="container">
    <h1 id={greeting}>Hello World</h1>
     {displayAction && <p>I am writing JSX</p>} 
    <Instructions/> 
   
    <ul>
       {
           emojis.map(emj =>(
               <li key={emj.name}>
                   <button onClick={displayEmojiName}>
                    <span role="img" aria-label={emj.name} 
                    id={emj.name}>{emj.emoji}</span>
                   </button>
               </li>
           ))
       }
    </ul>
   </div>)
}

export default JsxElement;