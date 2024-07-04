import card from "@/assets/img/front.png";
import { FaSearch } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <div className="to-white-500 rounded-md mb-8 flex flex-col items-center justify-between bg-gradient-to-r from-blue-900 px-6 py-12 text-white lg:flex-row lg:px-24">
      <div className="lg:w-1/2 space-y-9">
        <div>
          <h1 className="text-3xl lg:text-5xl">Find Your Dream Home! </h1>
          <h2 className="text-gray-300">
            Explore, Compare, and Secure Properties with Ease
          </h2>
        </div>

        <form className="flex items-center justify-between rounded-lg bg-slate-100 p-3 text-black">
          <input
            type="text"
            placeholder="Search..."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <div className="flex space-x-8">
          <div>
            <h2 className="text-2xl font-bold">200</h2>
            <p>Properties Listed</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">30</h2>
            <p>Realtors</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">10</h2>
            <p>Properties Sold</p>
          </div>
        </div>
      </div>
      <div className="mt-8 hidden justify-center lg:mt-0 lg:flex lg:w-1/2 lg:justify-end">
        <div className="relative">
          <img
            className="h-32 w-32 rounded-lg lg:h-[350px] lg:w-full"
            src={card}
            alt="Student 1"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
