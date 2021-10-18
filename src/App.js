import { React, useState } from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import getDogs from "./getDogs";
import Loading from "./Loading";

function App() {
  const [hasDogs, setHasDogs] = useState(false);
  const [dogs, setDogs] = useState([]);

  console.log("dogs in app", dogs);
  if (!hasDogs) {
    setDogs(async () => await getDogs);
    setHasDogs(true);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {hasDogs
          ? <div> <Nav dogs={dogs} /> <Routes dogs={dogs} /> </div>
          : <Loading />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
