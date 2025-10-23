export const choices = ["rock", "paper", "scissors"] as const;
export type Choice = (typeof choices)[number];

/* 
Changes to extend the game (RPS → RPSLS):

*types.ts*  
- Add new choices to the `choices` array.

*components/ChoiceButton.tsx*  
- Import new choice icons.  
- Update `iconsMap` to include new choices.

*components/Rules.tsx*  
- Update `RulesImage` path to reflect the new board.

*layouts/Game.tsx*  
- Update board background import path.  
- Update <img> rendering the board to use the new background.  

*layouts/Header.tsx*  
- Update the Header image src if necessary.

*layouts/Result.tsx*  
- Update `RPSMap` to define what each choice beats.  

*index.css*  
- For every new choice, create three CSS rules: `.choice`, `.choice.preview`, and `.choice.preview:active`.  
- `.choice` sets the background color and shadow for the choice.  
- `.choice.preview` defines the position when the choice is displayed in the selection area.  
- `.choice.preview:active` defines the effect when the choice is pressed.

*/
