import type { NextPage } from "next";
import Head from "next/head";
import Characters from "../components/Characters";
// import Image from "next/image";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>React Query</title>
				<meta
					name="description"
					content="App to fetch data from the Rick and Morty API to play with React Query"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="container mx-auto">
				<h1 className="text-center text-5xl font-light my-8">
					React Query with Rick and Morty
				</h1>
				<Characters />
			</div>
		</>
	);
};

export default Home;
