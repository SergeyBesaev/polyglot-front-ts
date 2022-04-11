import axios from 'axios';
import React, { useState } from 'react';
import { EngRus } from '../entity/eng.rus';
import PhraseEngRus from './phrase.eng.rus';

const Lesson1 = () => {

    let [allVerbs, setAllVerbs] = useState([])
    let [verb, setVerb] = useState()


    const [success, setSuccess] = useState(0)
    const [count, setCount] = useState(0)

    async function getAllVerbs() {
        const response = await axios.get('http://localhost:8080/lesson-1')
        setAllVerbs(response.data.data)
    }

    function getVerbFromList(verbs: EngRus[]) {
        const verbFirst = verbs.at(0) as EngRus
        // @ts-ignore
        setVerb(verbFirst)
        delete verbs[0]
        console.log(verb)
    }

    //{allVerbs.map((verb) => PhraseEngRus(verb))}


    return (
        <div>
            <button onClick={getAllVerbs}>Начать урок!</button>
            <p></p>
            <button onClick={() => getVerbFromList(allVerbs)}>Next</button>
            <p></p>
            <h1>{verb}</h1>
        </div>
    );
};

export default Lesson1;
