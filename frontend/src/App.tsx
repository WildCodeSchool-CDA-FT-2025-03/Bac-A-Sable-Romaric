import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[calc(100vh-12rem)] pb-16 flex flex-col gap-8 items-center justify-center bg-stone-950 text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
