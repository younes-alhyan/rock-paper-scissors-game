import ChoiceButton from "../components/ChoiceButton";
import PentagonSVG from "../assets/bg-pentagon.svg";
import { useState } from "react";
import { choices } from "../types";
import type { Choice } from "../types";

interface GameProps {
  setPick: React.Dispatch<React.SetStateAction<Choice | undefined>>;
  setIsPicking: React.Dispatch<React.SetStateAction<boolean>>;
}

function Game({ setPick, setIsPicking }: GameProps) {
  const [animation, setAnimation] = useState("pop-in");

  const pickHandler = (p: Choice) => {
    setAnimation("pop-out");
    setTimeout(() => {
      setPick(p);
      setIsPicking(false);
    }, 300);
  };

  return (
    <div
      className={`relative flex items-center justify-center ${animation} my-32`}
    >
      <img
        src={PentagonSVG}
        alt="PentagonSVG"
        className="w-[60vw] sm:w-auto"
      />
      {choices.map((choice) => (
        <ChoiceButton
          key={choice}
          button={choice}
          pickHandler={pickHandler}
          isPreview={true}
        />
      ))}
    </div>
  );
}

export default Game;
