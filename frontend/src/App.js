import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [word, setWord] = useState(""); // useState hook defines initial variable of word. SetWord updates value of word

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
