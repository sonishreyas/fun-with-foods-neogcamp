import React, { useState } from "react";
import "./styles.css";

foodDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "Fries",
  "🌭": "HotDog",
  "🍿": "Popcorn",
  "🧂": "Salt",
  "🥓": "Bacon",
  "🥚": "Egg",
  "🧇": "Waffle",
  "🥞": "Pancakes",
  "🧈": "Butter",
  "🍞": "Bread",
  "🥐": "Croissant"
};

var emojisWeKnow = Object.keys(foodDictionary);
var headingText = "Fun with Food!!";
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = foodDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have it in the database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = foodDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter a food emoji..."
      ></input>
      <h2> {meaning} </h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
