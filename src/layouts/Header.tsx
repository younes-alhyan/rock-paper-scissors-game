interface HeaderProps {
  score: number;
}

function Header({ score }: HeaderProps) {
  return (
    <div className="w-[90vw] md:w-[80vw] lg:w-5xl flex items-center justify-between my-12 p-4 sm:px-8 border-4 border-gray-500 rounded-2xl z-10">
      <img src="./logo.svg" alt="Logo" className="w-16 h-16 sm:w-32 sm:h-32" />
      <div className="h-full flex flex-col items-center justify-center py-2 px-4 sm:px-12 bg-white rounded-md">
        <p className="text-blue-700 font-semibold tracking-wide">SCORE</p>
        <p className="text-gray-600 text-5xl sm:text-6xl">{score}</p>
      </div>
    </div>
  );
}

export default Header;
