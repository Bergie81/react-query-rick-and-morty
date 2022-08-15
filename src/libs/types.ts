export interface CharacterProps {
	created: String;
	episode: Array<String>;
	gender: String;
	id: React.Key;
	image: String;
	location: {
		name: String;
		url: String;
	};
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
