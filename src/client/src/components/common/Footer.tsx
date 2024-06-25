export function Footer() {
  return (
    <footer className="bg-black text-white p-16">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="mb-6 lg:mb-0 text-center lg:text-left">
        <h1 className="text-2xl font-bold">Ayush Singh</h1>
        <p className="text-gray-500">All Rights Reserved, 2023</p>
      </div>
      <div className="mb-6 lg:mb-0 text-center">
        <nav className="">
          <ul>
            <li><a href="#" className=" mt-8 text-gray-400 hover:text-white">Home</a></li>
            <li><a href="#" className=" mt-8 text-gray-400 hover:text-white">About</a></li>
            <li><a href="#" className=" mt-8 text-gray-400 hover:text-white">Blogs</a></li>
            <li><a href="#" className=" mt-8 text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="text-center lg:text-right">
        <p className="text-gray-400 mb-2">Get to know us</p>
        <div className="flex justify-center lg:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.268c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75c.967 0 1.75.784 1.75 1.75s-.783 1.75-1.75 1.75zm12.5 10.268h-3v-4.569c0-1.092-.021-2.497-1.522-2.497-1.523 0-1.755 1.189-1.755 2.416v4.65h-3v-9h2.875v1.236h.041c.4-.756 1.376-1.555 2.834-1.555 3.032 0 3.592 1.994 3.592 4.586v5.733z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.556c-.883.392-1.832.656-2.828.775 1.017-.609 1.797-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.719 0-4.92 2.202-4.92 4.917 0 .39.042.765.127 1.127-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.575-.666 2.476 0 1.708.87 3.217 2.188 4.099-.809-.026-1.571-.248-2.24-.616v.062c0 2.385 1.698 4.374 3.946 4.828-.414.111-.85.171-1.299.171-.317 0-.626-.03-.927-.086.627 1.956 2.445 3.377 4.6 3.415-1.684 1.319-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.211 7.548 2.211 9.057 0 14.001-7.503 14.001-14.002 0-.213-.005-.426-.015-.637.961-.695 1.795-1.562 2.457-2.549z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
  );
}
