import { useContext } from "react";
import { context } from "../lib/Context";

import Navbar from "./components/Navbar";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

const CurrentPage = () => {
	const { page } = useContext(context);
	if (page === 0) return <Home />;
	if (page === 1) return <Blogs />;
	return <Home />;
};

export default function Layout() {
	return (
		<main className="overflow-x-hidden font-rubik bg-secondary w-full flex overflow-auto flex-col md:px-10 text-text">
			<div className="hidden md:flex gap-6 my-4 items-center justify-start">
				<div className="flex items-center justify-center gap-2">
					<div className="w-2 h-2 rounded-full bg-accent"></div>
					<span>Latest news</span>
				</div>

				<div className="flex gap-10 font-light items-center justify-between flex-nowrap text-sm">
					<div className="flex group items-center justify-center gap-2">
						<span className="group-first:text-transparent group-last:text-transparent bg-clip-text bg-gradient-to-r group-first:from-transparent group-first:to-70% group-first:to-text group-last:from-text group-last:from-70% group-last:to-transparent opacity-70">
							PROJECT EDGE IS NOW
						</span>
						<span className="text-md">LIVE</span>
					</div>
					<div className="flex group items-center justify-center gap-2">
						<span className="group-first:text-transparent group-last:text-transparent bg-clip-text bg-gradient-to-r group-first:from-transparent group-first:to-70% group-first:to-text group-last:from-text group-last:from-70% group-last:to-transparent opacity-70">
							Highly secure
						</span>
						<span className="text-md">Asset Archive</span>
					</div>
					<div className="flex group items-center justify-center gap-2">
						<span className="group-first:text-transparent group-last:text-transparent bg-clip-text bg-gradient-to-r group-first:from-transparent group-first:to-70% group-first:to-text group-last:from-text group-last:from-70% group-last:to-transparent opacity-70">
							Active community on
						</span>
						<span className="text-md">Discord</span>
					</div>
					<div className="flex group items-center justify-center gap-2">
						<span className="text-md">THE WEBSITE</span>
						<span className="group-first:text-transparent group-last:text-transparent bg-clip-text bg-gradient-to-r group-first:from-transparent group-first:to-70% group-first:to-text group-last:from-text group-last:from-70% group-last:to-transparent opacity-70">
							HAS BEEN LAUNCHED!
						</span>
					</div>
				</div>
			</div>
			<div className="p-2 md:p-6 bg-background w-full md:rounded-3xl">
				<Navbar />
				<CurrentPage />
			</div>
		</main>
	);
}
