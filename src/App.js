import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Pagination from "./Pagination";

function App() {
  const [text, setText] = useState("naruto");
  const [info, setInfo] = useState({});

  const API = `https://kitsu.io/api/edge`;
  const LIMIT = 12;

  useEffect(() => {
    if (text) {
      setInfo({});
      fetch(
        `${API}/anime?filter[text]=${text}&page[limit]=20`
      )
        .then((resp) => resp.json())
        .then((resp) => {
          return setInfo(resp);
        });
    }
  }, [text]);

  return (
    <div className="App">
      <Header
        value={text}
        onChange={(search) => setText(search)}
      />

      {info.data && (
        <ul className="anime-list">
          {info.data.map((anime) => {
            return (
              <li className="anime-card" key={anime.id}>
                <img
                  src={anime.attributes.posterImage.small}
                />
                <h2>{anime.attributes.canonicalTitle}</h2>
              </li>
            );
          })}
          {console.log(info.data)}
        </ul>
      )}
      <Pagination limit={LIMIT} total={1200} offset={240} />
    </div>
  );
}

export default App;
