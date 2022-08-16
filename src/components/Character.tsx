import React from "react";
import { CharacterProps } from "../types";
import Image from "next/image";

const Character = (character: CharacterProps) => {
	// console.log("Character", character);
	return (
		<div className="flex h-auto w-full overflow-hidden rounded shadow-md">
			<div className="relative h-auto w-1/2">
				<Image
					layout="fill"
					objectFit="cover"
					src={character.image}
					alt={`Image of ${character.name}`}
					priority={true}
				/>
			</div>
			<div className="h-60 w-1/2 px-6 py-4">
				<h2 className="mb-2 text-xl font-bold">{character.name}</h2>
				<p>{character.status}</p>
				<p>
					{character.species} - {character.gender}
				</p>
				<p>Last seen on {character.location.name}</p>
			</div>
		</div>
	);
};

export default Character;
