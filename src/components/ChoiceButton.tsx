import { useEffect, useState } from "react";
import PaperIcon from "../assets/icon-paper.svg";
import RockIcon from "../assets/icon-rock.svg";
import ScissorsIcon from "../assets/icon-scissors.svg";

interface ChoiceButtonProps {
  button: "rock" | "paper" | "scissors";
  pickHandler: (p: "rock" | "paper" | "scissors") => void | undefined;
  isPreview: boolean;
  playAnimation?: boolean;
}

const iconsMap = {
  paper: PaperIcon,
  rock: RockIcon,
  scissors: ScissorsIcon,
};

function ChoiceButton({
  button,
  pickHandler,
  isPreview,
  playAnimation,
}: ChoiceButtonProps) {
  const iconSrc = iconsMap[button];
  const [circlesAnimations, setCircleAnimations] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (!playAnimation) return;

    const circles = 3;
    for (let index = 0; index < circles; index++) {
      setTimeout(() => {
        setCircleAnimations((state) => {
          const newState = [...state];
          newState[index] = true;
          return newState;
        });
      }, index * 300);
    }
  }, [playAnimation]);
  return (
    <div
      className={`choice-button-container ${isPreview ? "preview" : ""} ${
        !playAnimation ? "z-10" : ""
      } ${button}`}
      onClick={() => {
        pickHandler(button);
      }}
    >
      <div className="choice-button">
        <img src={iconSrc} alt={button} />
      </div>
      {!isPreview && (
        <div className="z-1">
          <div
            className={`${
              playAnimation ? "absolute" : "hidden"
            } h-126 sm:h-186 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center aspect-square rounded-full ${
              circlesAnimations[2] ? "win bg-[rgba(255,255,255,0.01)]" : ""
            }`}
          ></div>
          <div
            className={`${
              playAnimation ? "absolute" : "hidden"
            } h-84 sm:h-124 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center aspect-square rounded-full ${
              circlesAnimations[1] ? "win bg-[rgba(255,255,255,0.04)]" : ""
            }`}
          ></div>
          <div
            className={`${
              playAnimation ? "absolute" : "hidden"
            } h-42 sm:h-62 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center justify-center aspect-square rounded-full ${
              circlesAnimations[0] ? "win bg-[rgba(255,255,255,0.08)]" : ""
            }`}
          ></div>
        </div>
      )}
    </div>
  );
}

export default ChoiceButton;
