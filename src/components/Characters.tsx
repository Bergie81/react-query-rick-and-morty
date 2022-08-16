import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { CharacterProps } from "../types";
import Character from "./Character";
// -!!!
// Comments show the standard way of fetching data from an API
// -!!!

// type CharactersProps = Array<Character>;

const Characters = () => {
	// const [characters, setCharacters] = useState<CharactersProps>([]);
	const [page, setPage] = useState(1);

	const fetchCharacters = async ({
		queryKey,
	}: {
		queryKey: Array<String | Number>;
	}) => {
		const response = await fetch(
			`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
		);
		const data = await response.json();
		// setCharacters(data.results);
		return data;
	};

	// useEffect(() => {
	// 	fetchCharacters();
	// }, []);

	// Pass the page number as a query key to the fetchCharacters function -> queryKey: ['characters', 2])
	const { data, isLoading, isError, isPreviousData } = useQuery(
		["characters", page],
		fetchCharacters,
		{
			keepPreviousData: true,
		}
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}

	return (
		<div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
				{/* {characters.map((character) => (
				<div key={character.id}> {character.name} </div>
			))} */}
				{data.results.map((character: CharacterProps) => (
					<Character key={character.id} {...character} />
				))}
			</div>
			<div className="mt-8 flex h-full items-center justify-center gap-4">
				<button
					className="w-32 cursor-pointer rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-default disabled:bg-gray-400"
					disabled={page === 1}
					onClick={() => setPage((currentPage) => currentPage - 1)}
				>
					Previous
				</button>
				<div>Page: {page}</div>
				<button
					className="w-32 cursor-pointer rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-default disabled:bg-gray-400"
					disabled={!data.info.next && isPreviousData}
					onClick={() => setPage((currentPage) => currentPage + 1)}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Characters;
