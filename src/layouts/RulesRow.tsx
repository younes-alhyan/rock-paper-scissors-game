interface RulesProps {
  toggleRules: () => void;
}

function RulesRow({ toggleRules }: RulesProps) {
  return (
    <div className="w-full max-w-7xl flex grow items-end justify-center md:justify-end pb-4 px-4 sm:px-12">
      <button
        className="bg-transparent border-2 border-gray-500 rounded-md px-12 py-2 text-white font-semibold cursor-pointer"
        onClick={toggleRules}
      >
        RULES
      </button>
    </div>
  );
}

export default RulesRow;
