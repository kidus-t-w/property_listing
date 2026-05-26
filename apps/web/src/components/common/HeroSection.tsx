import card from "@/assets/img/front.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="to-white-500 mb-8 flex flex-col items-center justify-between rounded-md bg-gradient-to-r from-blue-900 px-6 py-12 text-white lg:flex-row lg:px-24">
      <div className="space-y-9 lg:w-1/2">
        <div>
          <h1 className="text-3xl lg:text-5xl">Find Your Dream Home! </h1>
          <h2 className="text-gray-300">
            Explore, Compare, and Secure Properties with Ease
          </h2>
        </div>

        <div className="flex gap-4">
          <Link to="/search">
            <Button className="w-40 bg-blue-100 text-xl text-black hover:bg-blue-500 hover:text-white">
              Search
            </Button>
          </Link>

          <Link to="/services">
            <Button className="w-40 bg-blue-100 text-xl text-black hover:bg-blue-500 hover:text-white">
              Learn More
            </Button>
          </Link>
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
