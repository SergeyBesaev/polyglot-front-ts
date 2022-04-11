import React from 'react';
import {EngRusForm} from "../entity/eng.rus.form";

const PhraseEngRus = ({...verb}) => {
    

    return (
        <div>
            `{verb.engForm} и {verb.rusForm}`
        </div>
    );
};

export default PhraseEngRus;
