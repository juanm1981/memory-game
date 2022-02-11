import React from "react";
import Header from "./components/Header"
import Square from "./components/Square"
import { useState } from "react";
import uniqueRandom from "./functions";


function App() {

  const [score, setScore] = useState(0);

  const [highScore, setHighScore] = useState(0);

  const [lastPlayed, setLastPlayed] = useState([]);

  const onClickHandle = (e) => {
    if (lastPlayed.find(num => num === e.currentTarget.id) === undefined) {

      const newarr = [e.currentTarget.id].concat(lastPlayed);
      setLastPlayed(newarr);
      console.log(lastPlayed);

      setScore(score + 1);

    } else {
      setHighScore(score);
      setScore(score - score);
      setLastPlayed([]);
      alert("Game over");
    }

  }


  const squares = [];
  for (let i = 0; i < 5; i++) {
    const p = {
      num: uniqueRandom(),
      handle: onClickHandle,
    };
    squares.push(<Square n={p} key={i} />)
  }

  return (
    <div>
      <div className="navbar">
        <Header score={score} highScore={highScore} />
      </div>
      <div className="game">
        {squares}
      </div>
    </div>
  );
}





export default App;
