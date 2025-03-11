import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="bg-red-500 p-4 text-white font-bold text-xl">header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

export default App;
