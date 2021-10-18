import { React, useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
//import getDogs from "./getDogs";
import Loading from "./Loading";

function App() {
  const [shouldLoad, setShouldLoad] = useState(true);
  const [dogs, setDogs] = useState([]);
  console.log("app",{ shouldLoad, dogs})
  if (shouldLoad) {
    setShouldLoad(false)
    getDogs();
  } 

  async function getDogs(url = "http://localhost:5000/dogs") {
    const result = await axios.get(url);
    // setHasDogs(true);
    setDogs(result.data);
    //console.log("dogs getDogss", result.data);
  }


//console.log("dogs in app", dogs);
  return (
    <div className="App">
      <BrowserRouter>
        {dogs.length > 0
          ? <div> <Nav dogs={dogs} /> <Routes dogs={dogs} /> </div>
          : <Loading />
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
