import { React, useState } from "react";
import { useParams } from "react-router-dom"
// import duke from "./public/duke.jpg"
// import perry from "./public/perry.jpg"
// import whiskey from "./public/whiskey.jpg"

function DogDetails({ dogs }) {
    
    const params = useParams();
    const dog = dogs.filter(dog => dog.name === params.name);
    console.log("from details", dog)
    const { name, age, src, facts } = dog[0]
    //return dog names and pictures
    console.log("from details, pic", src)


    return (
        <div>
            <img src={`../public/${src}.jpg`} alt={`picture of ${name}`}></img>
            <h1>{name}</h1>
            <b> Age: {age}</b>
            <ul>
                {facts.map((fact, idx)=> <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails;