import { useEffect, useState } from "react";
import type { Repos } from "./types/repoas.type";
import api from "./services/api";

import "./App.css";

function App() {
  const [data, setData] = useState<Repos[]>([]);

  useEffect(() => {
    api
      .get("/repos")
      .then((repos) => {
        setData(repos.data as Repos[]);
      })
      .catch((err) => {
        console.error(err);
      });
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
