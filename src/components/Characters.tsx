import React, { useState, useEffect } from "react";

interface Character {
	created: String;
	episode: Array<String>;
	gender: String;
	id: React.Key;
	image: String;
	location: String;
	name: String;
	origin: {
		name: String;
		url: String;
	};
	species: String;
	status: String;
	type: String;
	url: String;
}

type CharactersProps = Array<Character>;

const Characters = () => {
	const [characters, setCharacters] = useState<CharactersProps>([]);

	const fetchCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character");
		const data = await response.json();
		setCharacters(data.results);
		console.log(data.results);
	};

	useEffect(() => {
		fetchCharacters();
	}, []);

	return (
		<div>
			{characters.map((character) => (
				<div key={character.id}> {character.name} </div>
			))}
		</div>
	);
};

export default Characters;
