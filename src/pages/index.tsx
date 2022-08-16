import type { NextPage } from "next";
import Head from "next/head";
import Characters from "../components/Characters";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>React Query with Rick and Morty</title>
				<meta
					name="description"
					content="App to fetch data from the Rick and Morty API to play with React Query"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="container mx-auto px-8">
				<h1 className="my-8 mb-12 text-center text-5xl font-light">
					React Query with Rick and Morty
				</h1>
				<Characters />
			</main>
		</>
	);
};

export default Home;
