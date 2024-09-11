import React from 'react';

function Character({ name, imgSrc, onSelect }) {
    const handleClick = () => {
        onSelect(name);
    };

    return (
        <div onClick={handleClick} className="character">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default Character;
