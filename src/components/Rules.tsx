import Close from "../assets/icon-close.svg";
import RulesImage from "../assets/image-rules-bonus.svg";

interface RulesProps {
  toggleRules: () => void;
}

function Rules({ toggleRules }: RulesProps) {
  return (
    <div className="absolute h-full w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00000075] flex items-center justify-center z-20">
      <div className="bg-white rounded-md py-8 px-4 sm:px-12">
        <div className="w-full flex items-center justify-between mb-12">
          <h1 className="font-bold text-2xl text-navy-900">RULES</h1>
          <img
            src={Close}
            alt=""
            onClick={toggleRules}
            className="cursor-pointer"
          />
        </div>
        <img src={RulesImage} alt="" />
      </div>
    </div>
  );
}

export default Rules;
