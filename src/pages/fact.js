import { useState, useEffect } from "react"
import Corenavbar from "../components/navbar"

export default function About() {
    //DEFINICE STAVU
    const [facts, setFacts] = useState([])

    //provedení a změna stavu
    useEffect(() => {
        //api, url
        let apiURL = "https://meowfacts.herokuapp.com/"
        console.log(apiURL)
        //api call - then převod na json - then vypsání do konzole
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setFacts(data)
            })
        return () => { }
    }, [])

    return (
        <>
        <div></div>
            <div>
                <h1>sdadsfsdsgdf</h1>
                <img src="https://http.cat/200.jpg" alt="cat" />
                <p>
                    {/* Zde se předpokládá, že data obsahují pole "data" */}
                    {facts.data && facts.data.map((fact, index) => (
                        <span key={index}>{fact}</span> // nebo jiný způsob vykreslení jednotlivých faktů
                    ))}
                </p>
            </div>
        </>
    )
}