import { Outlet } from "react-router";
import Header from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export default function App() {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>
  return (
    <div>
        <Header />
      <body className="mx-auto max-w-[1400px] font-poppins">
        <Outlet />
      </body>
        <Footer />
    </div>
  );
}
