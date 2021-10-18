import { React } from "react";
import { Link } from "react-router-dom";

//TODO: DOCSTRINGS
function DogList({ dogs }) {

  return (
    <div className="DogList">
      {dogs.map((dog, idx) =>
        <div key={idx}>
          <h4>{dog.name}</h4>
          <img src={`/${dog.src}.jpg`} alt={`pic of${dog.name}`}></img>
          <p>See <Link exact to={`/dogs/${dog.name}`}>{dog.name}</Link></p>
        </div>
      )}
    </div>
  );
}

export default DogList;