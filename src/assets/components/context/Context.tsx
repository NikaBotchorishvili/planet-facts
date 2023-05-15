import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";

export const dataContext = createContext({});

interface Props {
	children: ReactNode;
}

export interface Planet {
	name: string;
	className: string;
	overview: { content: string; source: string };
	structure: { content: string; source: string };
	geology: { content: string; source: string };
	rotation: string;
	revolution: string;
	radius: string;
	temperature: string;
	images: { planet: string; internal: string; geology: string };
}

export interface Context {
	planets?: Planet[];
	getPlanet?: Function;
}
export const ContextProvider = ({ children }: Props) => {
	const [planets, setPlanets] = useState<Planet[]>();

	const setData = () => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setPlanets(data))
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		setData();
	}, []);

	const getPlanet = (planetName: string): Planet | undefined => {
		return planets?.find(
			(planet) => planet.name.toLowerCase() == planetName.toLowerCase()
		);
	};
	const context: Context = {
		planets: planets,
        getPlanet: getPlanet,
	};

	return (
		<dataContext.Provider value={context}>{children}</dataContext.Provider>
	);
};
