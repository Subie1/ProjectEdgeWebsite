import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const context = createContext();
export const ContextProvider = ({ children }) => {
	const [page, setPage] = useState(0);
	
	const themes = ["dark", "light"];
	const [theme, setTheme] = useLocalStorage("theme", themes[0]);

	useEffect(() => {
		const element = document.getElementById("root");

		for (const t of themes) {
			if (element.classList.contains(t)) element.classList.remove(t);
		}

		element.classList.add(theme);
	}, [theme]);

	return (
		<context.Provider value={{ page, setPage, theme, setTheme }}>{children}</context.Provider>
	);
};
