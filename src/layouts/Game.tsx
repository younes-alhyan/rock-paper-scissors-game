import ChoiceButton from "../components/ChoiceButton";
import TriangleSVG from "../assets/bg-triangle.svg";
import { useState } from "react";
interface GameProps {
  setPick: React.Dispatch<React.SetStateAction<"rock" | "paper" | "scissors" | undefined>>;
  setIsPicking: React.Dispatch<React.SetStateAction<boolean>>;
}

function Game({ setPick, setIsPicking }: GameProps) {
  const [animation, setAnimation] = useState("pop-in");

  const pickHandler = (p: "rock" | "paper" | "scissors") => {
    setAnimation("pop-out");
    setTimeout(() => {
      setPick(p);
      setIsPicking(false);
    }, 300);
  };

  return (
    <div className={`relative flex items-center justify-center ${animation} my-32`}>
      <img src={TriangleSVG} alt="TriangleSVG" className="w-[60vw] max-w-3xs sm:w-auto"/>
      <ChoiceButton button="paper" pickHandler={pickHandler} isPreview={true} />
      <ChoiceButton
        button="scissors"
        pickHandler={pickHandler}
        isPreview={true}
      />
      <ChoiceButton button="rock" pickHandler={pickHandler} isPreview={true} />
    </div>
  );
}

export default Game;
