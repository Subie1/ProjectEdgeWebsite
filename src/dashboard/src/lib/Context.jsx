import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const context = createContext();
export const ContextProvider = ({ children }) => {
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(false);

	const credits = [
		{ id: "767739109749555241", role: "Main Edge Developer" },
		{ id: "968221138717147156", role: "Mobile Developer" },
		{ id: "533043678307024925", role: "UI/UX Developer" },
	];

	const themes = ["dark", "light"];
	const [theme, setTheme] = useLocalStorage("theme", themes[0]);

	return (
		<context.Provider
			value={{
				page,
				setPage,
				theme,
				setTheme,
				credits,
				loading,
				setLoading,
			}}
		>
			{children}
		</context.Provider>
	);
};
