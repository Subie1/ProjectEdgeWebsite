import { useContext } from "react";
import Credits from "../layout/components/Credits";
import ToothlessParallax from "../layout/components/ToothlessParallax";
import { context } from "../lib/Context";
import Icon from "../layout/components/Icons";

export default function Home() {
	const { setPage } = useContext(context);

	return (
		<main className="w-full overflow-hidden h-full flex">
			<div className="h-full flex flex-col gap-3 flex-1 md:p-10 items-center justify-center md:justify-between relative">
				<div className="flex flex-col gap-3">
					<header className="text-4xl text-center font-bold gap-10 flex items-center justify-center">
						<span className="relative flex items-center justify-center">
							<span className="z-20 tracking-widest">
								Project
							</span>
							<div className="absolute left-full bottom-0 w-4 animate-pulse h-1 bg-gradient-to-r from-primary to-accent"></div>
						</span>
						<span className="text-transparent bg-gradient-to-r bg-clip-text from-primary to-accent">
							Edge
						</span>
					</header>
					<p className="text-center opacity-60 text-pretty">
						The return of our favorite childhood game{" "}
						<span className="animate-pulse text-secondary">
							School of Dragons
						</span>
					</p>
				</div>

				<Credits />

				<div className="flex gap-4 w-full items-center justify-center text-xs md:text-sm">
					<a
						href={import.meta.env.VITE_DISCORD_INVITE}
						className="px-4 py-2 scale-105 bg-gradient-to-r from-accent to-primary text-background rounded-md cursor-pointer hover:scale-100 transition-all duration-300"
					>
						Join our Discord
					</a>
					<a onClick={() => setPage(1)} className="cursor-pointer group flex">
						<div className="w-9 rounded-md border border-text flex items-center justify-center text-lg group-hover:scale-0 transition-all duration-300">
							<Icon name="TbDownload" />
						</div>
						<span className="scale-100 px-4 py-2 border border-text rounded-md cursor-pointer hover:scale-95 transition-all duration-300">
							Download
						</span>
						<div className="w-9 rounded-md border border-text flex items-center justify-center text-lg group-hover:scale-100 scale-0 transition-all duration-300">
							<Icon name="TbDownload" />
						</div>
					</a>
				</div>
			</div>
			<div className="flex-1 h-full rounded-full hidden md:block overflow-hidden shadow-lg mx-4 -my-4 shadow-primary">
				<ToothlessParallax />
			</div>
		</main>
	);
}
