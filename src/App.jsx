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
  const [userFlipKey, setUserFlipKey] = useState(0);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    setUserFlipKey((prev) => prev + 1);
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} flipKey={userFlipKey} />
        <Box title="Computer" />
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
