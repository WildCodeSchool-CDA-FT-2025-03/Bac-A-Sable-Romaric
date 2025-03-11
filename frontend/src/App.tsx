import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[calc(100vh-8rem)] flex flex-col gap-8 items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-32 bg-stone-950 text-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
