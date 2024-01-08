import { useEffect, useState } from "react";
import { VscTerminalLinux } from "react-icons/vsc";
import Icon from "../layout/components/Icon";
import useDevice from "../hooks/useDevice";

export default function Home() {
	const device = useDevice();

	const [page, setPage] = useState(0);
	const [message, setMessage] = useState([]);
	const [urls, setURLs] = useState([]);

	function SetWindows() {
		setPage(0);
		setMessage(["Download for Windows", "Alternative download"]);
		setURLs([
			import.meta.env.VITE_WINDOWS_DOWNLOAD_1,
			import.meta.env.VITE_WINDOWS_DOWNLOAD_2,
		]);
	}

	function SetLinux() {
		setPage(1);
		setMessage(["Download for Linux"]);
		setURLs([import.meta.env.VITE_LINUX_DOWNLOAD]);
	}

	function SetMacOS() {
		setPage(2);
		setMessage(["Download for MacOS"]);
		setURLs([import.meta.env.VITE_MACOS_DOWNLOAD]);
	}

	useEffect(() => {
		if (device === "Windows") return SetWindows();
		if (device === "Linux") return SetLinux();
		if (device === "MacOS") return SetMacOS();
		SetWindows();
	}, [device]);

	function GoDownload() {
		const element = document.getElementById("download_container");
		element.scrollIntoView({ behavior: "smooth" });
	}

	return (
		<main className="w-full p-6 md:p-16 flex flex-col gap-24">
			<div className="gap-6 flex flex-col z-20">
				<header className="flex font-bold w-fit items-center justify-center gap-2">
					<div className="w-2 h-2 bg-primary rounded-full"></div>
					<span>Powered by cutting edge Sentinel flames</span>
				</header>
				<p className="text-2xl md:text-5xl w-2/4 text-pretty font-mono">
					The revival of our favorite game
				</p>
				<div className="w-full grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-2">
					<div className="text-pretty max-w-96 flex flex-col gap-2">
						<span className="leading-snug">
							Cut to the chase and get ready for the best show, download the
							game now and enjoy nostalgic memories flow back.
						</span>
						<span>- Your story is awaiting you fellow dragon rider.</span>
					</div>
					<div className="flex flex-col items-center justify-center gap-10">
						<dir className="flex flex-row gap-2">
							<header className="hidden md:flex items-center justify-center gap-2">
								<Icon name="TbBalloon" className="text-2xl" />
								<span>Android coming soon</span>
							</header>
							<a
								onClick={() => GoDownload()}
								className="flex group cursor-pointer hover:scale-105 transition-all duration-200"
							>
								<div className="transition-all group-hover:scale-0 duration-200 w-12 h-12 text-background bg-text rounded-2xl flex items-center justify-center">
									<Icon name="TbArrowDown" />
								</div>
								<span className="px-4 transition-all duration-200 py-3 rounded-2xl bg-text text-background">
									Download Now
								</span>
								<div className="transition-all scale-0 group-hover:scale-100 duration-200 w-12 h-12 text-background bg-text rounded-2xl flex items-center justify-center">
									<Icon name="TbArrowDown" />
								</div>
							</a>
						</dir>
					</div>
				</div>
			</div>

			<div
				id="download_container"
				className="w-full gap-6 border-r border-r-primary border-l border-l-primary md:gap-0 z-20 text-text flex flex-col md:flex-row p-10 rounded-2xl"
			>
				<div className="flex-1 flex flex-col items-start justify-start">
					<div className="flex items-center justify-center gap-2">
						<div className="w-2 h-2 rounded-full bg-accent"></div>
						<header className="text-lg">Downloads</header>
					</div>
					<span className="max-w-96 opacity-70">
						One click away from the greatest experience as the most fierce
						dragon rider in all of Berk.
					</span>
				</div>
				<div className="flex-1 flex flex-col gap-6 items-center justify-center">
					<div className="flex gap-2">
						<div
							onClick={() => SetWindows()}
							className={`${
								page === 0 ? "shadow-md shadow-primary" : ""
							} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}
						>
							<Icon name="TbBrandWindows" className="text-2xl" />
							<span className="text-xs">Windows</span>
						</div>
						<div
							onClick={() => SetLinux()}
							className={`${
								page === 1 ? "shadow-md shadow-primary" : ""
							} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}
						>
							<VscTerminalLinux className="text-2xl" />
							<span className="text-xs">Linux</span>
						</div>
						<div
							onClick={() => SetMacOS()}
							className={`${
								page === 2 ? "shadow-md shadow-primary" : ""
							} transition-all duration-200 w-16 h-16 min-w-16 min-h-16 cursor-pointer flex flex-col items-center justify-center rounded-xl border-2 border-primary`}
						>
							<Icon name="TbBrandApple" className="text-2xl" />
							<span className="text-xs">MacOS</span>
						</div>
						<div className="w-16 opacity-55 h-16 min-w-16 group cursor-pointer min-h-16 relative flex flex-col items-center justify-center rounded-xl border-2 border-primary">
							<Icon name="TbBrandAndroid" className="text-2xl" />
							<span className="text-xs">Android</span>
							<div className="absolute md:top-2 h-fit bottom-16 scale-0 transition-all duration-300 md:left-16 text-xs text-nowrap w-24 group-hover:scale-100 bg-primary rounded-lg p-2 flex-nowrap items-center justify-center">
								<p className="text-nowrap w-full h-full text-text dark:text-background">
									Coming Soon!
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-2">
						{urls.map((url) => (
							<a
								key={url}
								className="rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all duration-200 text-center bg-text px-4 py-3 text-background"
								href={url}
								download
							>
								<Icon name="TbDownload" />
								{message[urls.indexOf(url)]}
							</a>
						))}
					</div>
				</div>
			</div>

			<div className="absolute w-full h-full overflow-hidden flex items-center justify-center left-0 top-0 opacity-50 dark:opacity-20">
				<img
					src="/assets/toothless.png"
					className="scale-150 md:scale-125"
				/>
			</div>
		</main>
	);
}
