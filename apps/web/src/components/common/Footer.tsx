import { Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-8 bg-black p-16 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row">
        <div className="mb-6 text-center lg:mb-0 lg:text-left">
          <h1 className="text-xl font-bold">Ethio Property</h1>
          <p className="text-gray-500">All Rights Reserved, 2024</p>
        </div>
        <div className="mb-6 text-center lg:mb-0">
          <nav className="">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-2xl font-bold mt-8 text-gray-400 hover:text-white">
                  Ethio Property
                </a>
              </li>
              <li>
                <a href="#" className="mt-8 text-gray-400 hover:text-white">
                  Address: Bole, Namibia Street, Sheger building, <br></br>
                  Office 701, Addis Ababa,Addis Ababa,Ethiopia
                </a>
              </li>
              <li>
                <a href="#" className="mt-8 text-gray-400 hover:text-white">
                  E-mail: info@realethio.com
                </a>
              </li>
              <li>
                <a href="#" className="mt-8 text-gray-400 hover:text-white">
                  Phone: +251911619180
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="text-center lg:text-right">
          <p className="mb-2 text-gray-400">Get to know us</p>
          <div className="flex justify-center space-x-4 lg:justify-end">
            <a href="https://www.linkedin.com/" className="text-gray-400 hover:text-white" target="_blank">
              <div className="h-6 w-6 fill-current">
              <Linkedin />
              </div>
            </a>
            <a href="https://x.com/" className="text-gray-400 hover:text-white" target="_blank">
              <div className="h-6 w-6 fill-current">
                  <Twitter />
              </div>
            </a>
            <a href="https://www.facebook.com/" className="text-gray-400 hover:text-white" target="_blank">
              <div className="h-6 w-6 fill-current">
                <Facebook />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
