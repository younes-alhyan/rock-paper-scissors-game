import { useState } from "react";
import Header from "./layouts/Header";
import Game from "./layouts/Game";
import Result from "./layouts/Result";
import RulesRow from "./layouts/RulesRow";
import Rules from "./components/Rules";
import type { Choice } from "./types";

function App() {
  const [score, setScore] = useState<number>(0);
  const [isPicking, setIsPicking] = useState<boolean>(true);
  const [pick, setPick] = useState<Choice | undefined>();
  const [showRules, setShowRules] = useState(false);

  function toggleRules() {
    setShowRules(!showRules);
  }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center">
      <Header score={score} />
      {isPicking ? (
        <Game setPick={setPick} setIsPicking={setIsPicking} />
      ) : (
        <Result setScore={setScore} pick={pick} setIsPicking={setIsPicking} />
      )}
      <RulesRow toggleRules={toggleRules} />
      {showRules && <Rules toggleRules={toggleRules} />}
    </div>
  );
}

export default App;
