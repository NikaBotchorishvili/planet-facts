import { createContext, useState, useEffect } from "react";
import * as React from "react";

export const dataContext = createContext({});

interface Props {
	children: React.JSX.Element[];
}

interface Planet {
    
}
export const ContextProvider = ({ children }: Props) => {
	const [planets, setPlanets] = useState<Planet | null>(null);

	const setData = () => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setPlanets(data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		setData();
	}, []);

	const context = {};

	return (
		<dataContext.Provider value={dataContext}>
			{...children}
		</dataContext.Provider>
	);
};
