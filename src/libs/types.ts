type StringImageProps = {
	src: string;
} & (
	| { width?: never; height?: never; layout: "fill" }
	| {
			width: number | string;
			height: number | string;
			layout?: Exclude<LayoutValue, "fill">;
	  }
) &
	(
		| {
				placeholder?: Exclude<PlaceholderValue, "blur">;
				blurDataURL?: never;
		  }
		| { placeholder: "blur"; blurDataURL: string }
	);

type ObjectImageProps = {
	src: StaticImport;
	width?: number | string;
	height?: number | string;
	layout?: LayoutValue;
	placeholder?: PlaceholderValue;
	blurDataURL?: never;
};

export type ImageProps = Omit<
	JSX.IntrinsicElements["img"],
	"src" | "srcSet" | "ref" | "width" | "height" | "loading" | "style"
> & {
	loader?: ImageLoader;
	quality?: number | string;
	priority?: boolean;
	loading?: LoadingValue;
	unoptimized?: boolean;
	objectFit?: ImgElementStyle["objectFit"];
	objectPosition?: ImgElementStyle["objectPosition"];
} & (StringImageProps | ObjectImageProps);

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
