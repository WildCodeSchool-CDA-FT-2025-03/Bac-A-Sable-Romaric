import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}

export default App;
