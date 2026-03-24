import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
function App() {
  const choice = {
    rock: {
      name: "Rock",
      img: "https://cdn-icons-png.flaticon.com/512/5773/5773204.png",
    },
    scissors: {
      name: "Scissors",
      img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png",
    },
    paper: {
      name: "Paper",
      img: "https://cdn-icons-png.flaticon.com/512/5824/5824373.png",
    },
  };

  const [userSelect, setUserSelect] = useState(choice.scissors);
  const [computerSelect, setComputerSelect] = useState(choice.scissors);
  const [result, setResult] = useState("");
  const [flipKey, setFlipKey] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    setFlipKey((prev) => prev + 1);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} flipKey={flipKey} result={result} />
        <Box
          title="Computer"
          item={computerSelect}
          flipKey={flipKey}
          result={result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Tie"}
        />
      </div>
      <div className="main">
        <button className="selectButton" onClick={() => play("scissors")}>
          가위
        </button>
        <button className="selectButton" onClick={() => play("rock")}>
          바위
        </button>
        <button className="selectButton" onClick={() => play("paper")}>
          보
        </button>
      </div>
    </div>
  );
}

export default App;
