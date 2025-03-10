import { useEffect, useState } from "react";
import type { Repos } from "./types/repoas.type";

import "./App.css";

function App() {
  const [data, setData] = useState<Repos[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/repos")
      .then((res) => res.json())
      .then((repos) => setData(repos as Repos[]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Bac-a-sable-Romaric</h1>
      {data.length > 0 && <h2>{data[0].url}</h2>}
      {data.length > 0 && <h2>{data[0].languages[0].node.name}</h2>}
    </>
  );
}

export default App;
