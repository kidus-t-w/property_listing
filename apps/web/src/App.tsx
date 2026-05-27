import { Outlet } from "react-router";
import Header from "./components/common/Header";
import { Footer } from "./components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter',system-ui] antialiased [font-feature-settings:'ss01']">
      <Header />
      <main className="mx-auto w-full h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}