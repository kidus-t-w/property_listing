import { Link } from "react-router-dom";

// Assets
import Logo from "../../assets/img/H logo_Name.png";

// Components
import { Button } from "@/components/ui/button";
import Navbar from "@/components/common/Navbar";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between sm:justify-around p-2 border-b-2 bg-gray-100 mb-4">
      <Link to="/" className="flex items-center">
      </Link>
        <img src={Logo} alt="RealEthio Logo" className="h-10  sm:block" />
      <Navbar />
      <div className="flex items-center space-x-4">
        <Button variant="destructive" className="hidden sm:block">Free Listing</Button>
        <Link to="/login" className="hidden sm:block text-gray-700 hover:text-gray-900">
          Login
        </Link>
        <Link to="/signup" className="hidden sm:block text-gray-700 hover:text-gray-900">
          Signup
        </Link>
        {/* <Button className="md:hidden"><Menu /></Button> */}
      </div>
    </header>
  );
}
