// import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { CharacterProps } from "../libs/types";
import Character from "./Character";
// -!!!
// Comments show the standard way of fetching data from an API
// -!!!

// type CharactersProps = Array<Character>;

const Characters = () => {
	// const [characters, setCharacters] = useState<CharactersProps>([]);

	const fetchCharacters = async () => {
		const response = await fetch("https://rickandmortyapi.com/api/character");
		const data = await response.json();
		// setCharacters(data.results);
		return data.results;
	};

	// useEffect(() => {
	// 	fetchCharacters();
	// }, []);

	const { data, status } = useQuery("characters", fetchCharacters);

	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "error") {
		return <div>Error</div>;
	}

	console.log("data", data);
	return (
		<div>
			{/* {characters.map((character) => (
				<div key={character.id}> {character.name} </div>
			))} */}
			{data.map((character: CharacterProps) => (
				<Character key={character.id} {...character} />
			))}
		</div>
	);
};

export default Characters;
