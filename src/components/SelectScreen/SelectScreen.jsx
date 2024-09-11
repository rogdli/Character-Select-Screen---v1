import React, { useState } from 'react';
import Character from '../Character/Character'; // Verifica la ruta

import SonGoku from '../../icons/SonGoku.png';
import Vegeta from '../../icons/Vegeta.png';
import Piccolo from  '../../icons/Piccolo.png';
import SonGohan from '../../icons/SonGohan.png';
import Trunks from '../../icons/Trunks.png';
import Freeza from '../../icons/Freeza.png';
import Black from '../../icons/Black.png';


const characters = [
    {   
        name: 'Goku',
        imgSrc: SonGoku
    },
    {   
        name: 'Vegeta',
        imgSrc: Vegeta
    },
    {
        name: 'Piccolo',
        imgSrc: Piccolo
    },
    {
        name: 'Gohan',
        imgSrc: SonGohan
    },
    {
        name: 'Trunks',
        imgSrc: Trunks
    },
    {
        name: 'Freeza',
        imgSrc: Freeza
    },
    {
        name: 'Goku Black',
        imgSrc: Black
    }
];

function SelectScreen() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    function handleSelect(name) {
        setSelectedCharacter(name);
    }

    return (
        <div className = "container">
            <h1>Choose Your Fighter</h1>
            <div className="character-roster">
                {characters.map((c) => (
                    <Character
                        key={c.name}
                        name={c.name}
                        imgSrc={c.imgSrc}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
            {selectedCharacter && <p>Selected: {selectedCharacter}</p>}
        </div>
    );
}

export default SelectScreen;
