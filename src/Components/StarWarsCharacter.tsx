import React from "react";

interface StarWarsCharacterProps {
    name: string;
}

export function StarWarsCharacter({ name }: StarWarsCharacterProps) {
    return (
        <div>
            <p>{name}</p>
        </div>
    );
}
