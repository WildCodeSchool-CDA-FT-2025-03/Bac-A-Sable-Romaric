import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <body className="bg-stone-900 text-white">
        <header className="w-screen h-16 bg- flex items-center justify-center bg-gradient-to-t from-stone-800 to-stone-900">
          <h1 className="text-white text-2xl font-bold">Bac à sable de Romaric</h1>
        </header>
        <main className="w-screen min-h-[calc(100vh-8rem)] flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16 xl:p-32">
          <Outlet />
        </main>
        <footer className="w-screen h-16 flex items-center justify-center bg-gradient-to-t from-stone-900 to-stone-800">
          footer
        </footer>
      </body>
    </>
  );
}

export default App;
