import { Outlet } from "react-router";
import Header from "./components/common/Header";

export default function App() {


  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>
  return (
    <body className="font-poppins mx-auto max-w-[1400px]">
      <Header />
      <div className="m"></div>
      <Outlet/>
    </body>
  );
}
