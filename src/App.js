import { React, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Loading from "./Loading";
import "./App.css"


const DOGS_URL = "http://localhost:5000/dogs";

//TODO: docstrings!!!!!!!
function App() {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [dogs, setDogs] = useState([]);

  console.log("App", { shouldLoad, dogs })

  async function getDogs(url = DOGS_URL) {
    const result = await axios.get(url);
    setDogs(result.data);
  }

  if (shouldLoad) {
    setShouldLoad(false);
    getDogs();
  }

  if (dogs.length === 0) {
    return <Loading />
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter >
    </div >
  );
}

export default App;
