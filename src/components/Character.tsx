import React from "react";
import { CharacterProps } from "../libs/types";
import Image from "next/image";

const Character = (character: CharacterProps) => {
	// console.log("Character", character);
	return (
		<div>
			<Image
				width={250}
				height={250}
				src={character.image}
				alt={`Image of ${character.name}`}
			/>
			<h2>{character.name}</h2>
			<p>{character.status}</p>
			<p>
				{character.species} - {character.gender}
			</p>
			<p>Last seen on {character.location.name}</p>
		</div>
	);
};

export default Character;
