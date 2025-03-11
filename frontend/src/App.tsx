import { Outlet } from "react-router-dom";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-[calc(100vh-8rem)] flex flex-col gap-8 items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-32 bg-stone-950 text-white">
        <Outlet />
      </main>
      <footer className="w-full h-16 flex items-center justify-center text-white bg-gradient-to-t from-slate-900 to-stone-950">
        footer
      </footer>
    </>
  );
}

export default App;
