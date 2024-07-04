import { Facebook } from "lucide-react";

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
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.268c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75c.967 0 1.75.784 1.75 1.75s-.783 1.75-1.75 1.75zm12.5 10.268h-3v-4.569c0-1.092-.021-2.497-1.522-2.497-1.523 0-1.755 1.189-1.755 2.416v4.65h-3v-9h2.875v1.236h.041c.4-.756 1.376-1.555 2.834-1.555 3.032 0 3.592 1.994 3.592 4.586v5.733z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.609 1.797-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .39.042.765.127 1.127-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.575-.666 2.476 0 1.708.87 3.217 2.188 4.099-.809-.026-1.571-.248-2.24-.616v.062c0 2.385 1.698 4.374 3.946 4.828-.414.111-.85.171-1.299.171-.317 0-.626-.03-.927-.086.627 1.956 2.445 3.377 4.6 3.415-1.684 1.319-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.211 7.548 2.211 9.057 0 14.001-7.503 14.001-14.002 0-.213-.005-.426-.015-.637.961-.695 1.795-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
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
