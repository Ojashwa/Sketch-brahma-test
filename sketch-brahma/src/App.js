import "./App.css";
import { useState, useEffect } from "react";

const URL = {
  0: "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata",
  1: "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
};
function App() {
  const [data, setData] = useState();
  const [urlIndex, setUrlIndex] = useState(0);

  useEffect(() => {
    fetch(URL[urlIndex])
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data.meals));
      });
  }, [urlIndex]);
  return (
    <div className="App">
      <header className="App-header">
        <div className="center-div">
          <p className="text">{data}</p>
        </div>
        <a
          className="App-link"
          href={URL[urlIndex]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Data Extracted from
        </a>
        <div id="buttons">
          {urlIndex ? (
            <button
              onClick={() => {
                setUrlIndex(0);
              }}
            >
              Get previous
            </button>
          ) : (
            <button
              onClick={() => {
                setUrlIndex(1);
              }}
            >
              Get next
            </button>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
