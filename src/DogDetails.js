import { React } from "react";
import { useParams, Redirect } from "react-router-dom";
import "./DogDetails.css"

/** Renders details of dog
 * 
 * props: dogs
 * state: N/A
 * 
 * App-> Routes-> DogDetails
 */
function DogDetails({ dogs }) {

    const { name } = useParams();
    const dog = dogs.find(dog => dog.src === name.toLowerCase());

    if (!dog) {
        return <Redirect to="/dogs" />
    }

    const { name: dogName, age, src, facts } = dog;

    return (
        <div className="DogDetails">
            <img src={`/${src}.jpg`} alt={`pic of ${dogName}`}></img>
            <h1>{dogName}</h1>
            <b> Age: {age}</b>
            <ul>
                {facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;