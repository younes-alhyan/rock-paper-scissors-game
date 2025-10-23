import { useState, useEffect } from "react";
import ChoiceButton from "../components/ChoiceButton";
import { choices } from "../types";
import type { Choice } from "../types";

interface ResultProps {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  pick: Choice | undefined;
  setIsPicking: React.Dispatch<React.SetStateAction<boolean>>;
}

const RPSMap: Record<Choice, Choice[]> = {
  rock: ["scissors"],
  paper: ["rock"],
  scissors: ["paper"],
};

function Result({ setScore, pick, setIsPicking }: ResultProps) {
  const [animation, setAnimation] = useState("pop-in");
  const [isPicked, setIsPicked] = useState(false);
  const [randomPick, setRandomPick] = useState<Choice>();
  const [result, setResult] = useState<string>();
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (!pick) return;

    const total = 25;
    const interval = 50;
    const timeouts: number[] = [];

    let random: Choice = choices[Math.floor(Math.random() * choices.length)];

    for (let i = 0; i < total; i++) {
      timeouts.push(
        window.setTimeout(() => {
          random = choices[Math.floor(Math.random() * choices.length)];
          setRandomPick(random);
        }, i * interval)
      );
    }

    const endTimer = setTimeout(() => {
      setRandomPick(random);
      setIsPicked(true);
    }, total * interval);

    timeouts.push(endTimer);

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [pick]);

  useEffect(() => {
    if (!isPicked || !pick || !randomPick) return;

    if (pick === randomPick) setResult("DRAW");
    else if (RPSMap[pick].includes(randomPick)) {
      setScore((score) => score + 1);
      setResult("YOU WIN");
      setPlayAnimation(true);
    } else {
      setResult("YOU LOST");
      setPlayAnimation(true);
    }
  }, [isPicked, pick, randomPick, setScore, setPlayAnimation]);

  const playAgain = () => {
    setAnimation("pop-out");
    setTimeout(() => setIsPicking(true), 300);
  };

  return (
    <div
      className={`w-full sm:w-auto flex flex-col items-center justify-center px-4 sm:px-0 ${animation}`}
    >
      <div className="w-full flex items-center justify-between sm:justify-center sm:gap-24">
        <div className="h-full flex flex-col-reverse sm:flex-col items-center justify-end sm:justify-center gap-12">
          <h1 className="font-medium text-white tracking-wider w-[125px] md:w-auto text-center">
            YOU PICKED
          </h1>
          {pick && (
            <ChoiceButton
              button={pick}
              isPreview={false}
              playAnimation={playAnimation && result === "YOU WIN"}
            />
          )}
        </div>

        {isPicked && result && (
          <div className="hidden md:flex flex-col items-center justify-center gap-6 pop-in z-10">
            <h1 className="text-white font-bold text-4xl">{result}</h1>
            <button
              className="w-full bg-white py-2 font-medium tracking-wider rounded-md text-navy-900 cursor-pointer"
              onClick={playAgain}
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        <div className="h-full flex flex-col-reverse sm:flex-col items-center justify-end sm:justify-center gap-12">
          <h1 className="font-medium text-white tracking-wider w-[125px] md:w-auto text-center">
            THE HOUSE PICKED
          </h1>
          <div className="min-h-28 aspect-square rounded-full bg-[#00000026] flex items-center justify-center">
            {randomPick && (
              <div className="pop-in">
                <ChoiceButton
                  button={randomPick}
                  isPreview={false}
                  playAnimation={playAnimation && result === "YOU LOST"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {isPicked && result && (
        <div className="w-full flex md:hidden flex-col items-center justify-center mt-12 gap-6 pop-in z-10">
          <h1 className="text-white font-bold text-4xl">{result}</h1>
          <button
            className="w-8/12 bg-white py-2 font-medium tracking-wider rounded-md text-navy-900 cursor-pointer"
            onClick={playAgain}
          >
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
