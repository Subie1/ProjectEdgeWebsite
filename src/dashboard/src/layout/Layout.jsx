import { useContext } from "react";
import { context } from "../lib/Context";

import Home from "../pages/Home";
import Navbar from "./components/Navbar";
import Downloads from "../pages/Downloads";
import Loading from "./components/Loading";

const CurrentPage = () => {
	const { page } = useContext(context);
	if (page === 0) return <Home />;
	if (page === 1) return <Downloads />;
	return <Home />;
};

export default function Layout() {
	const { theme, loading } = useContext(context);

	return (
		<main
			className={`${theme} w-full transition-all duration-200 md:p-16 p-4 h-full flex flex-col gap-4 bg-background text-text font-mono`}
		>
			{loading ? <Loading /> : ""}
			<Navbar />
			<CurrentPage />
		</main>
	);
}
